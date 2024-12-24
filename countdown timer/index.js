class Timer {
    msbRegex = /^[0-5]$/; lsbRegex = /^[0-9]$/; minutes = 0; seconds = 0;
  
    constructor(minMSB, minLSB, secMSB, secLSB, start, stop, reset, display) {
      this.minMSB = document.getElementById(minMSB); this.minLSB = document.getElementById(minLSB);
      this.secMSB = document.getElementById(secMSB); this.secLSB = document.getElementById(secLSB);
      this.start = document.getElementById(start); this.stop = document.getElementById(stop);
      this.reset = document.getElementById(reset); this.display = document.getElementById(display);
    }
  
    onClick = e => {
      const { tagName, id } = e.target;
      if (tagName === 'INPUT') e.target.select();
      else if (id === 'start') this.onStart(); else if (id === 'stop') this.onStop(); else if (id === 'reset') this.onReset();
    };
  
    onStart = () => {
      this.setControls(true, false); this.display.classList.add('progress');
      this.setInputsDisabledStatus(true); this.setTime(); this.startTimer();
    };
  
    onStop = () => {
      this.setControls(false, true); this.display.classList.remove('progress');
      this.setInputsDisabledStatus(false); clearInterval(this.intervalId);
    };
  
    onReset = () => {
      this.setControls(false, true); this.resetControls(); this.resetTimerValue();
    };
  
    setControls = (startStatus = false, stopStatus = false) => {
      this.start.disabled = startStatus; this.stop.disabled = stopStatus;
    };
  
    onInput = e => {
      const { id } = e.target, value = Number(e.data);
      const regex = id.includes('MSB') ? this.msbRegex : this.lsbRegex;
      this.onValueEntry(regex, e.target, value);
    };
  
    onValueEntry = (regex, target, value) => {
      target.value = regex.test(value) ? value : 0;
      target.nextElementSibling?.focus();
    };
  
    setInputsDisabledStatus = isDisabled => {
      [this.minMSB, this.minLSB, this.secMSB, this.secLSB].forEach(input => (input.disabled = isDisabled));
    };
  
    resetControls = () => {
      clearInterval(this.intervalId); this.display.classList.remove('progress');
      this.setInputsDisabledStatus(false);
    };
  
    resetTimerValue = () => {
      [this.minMSB, this.minLSB, this.secMSB, this.secLSB].forEach(input => (input.value = 0));
    };
  
    setTime = () => {
      this.minutes = +(this.minMSB.value + this.minLSB.value);
      this.seconds = +(this.secMSB.value + this.secLSB.value);
    };
  
    startTimer = () => {
      if (!this.minutes && !this.seconds) return this.onReset();
      this.intervalId = setInterval(() => {
        this.seconds = this.seconds > 0 ? this.seconds - 1 : 59;
        if (this.seconds === 59) this.minutes -= 1;
        if (!this.minutes && !this.seconds) this.onReset();
        this.setDisplay(this.minutes, this.seconds);
      }, 1000);
    };
  
    setDisplay = (mins, secs) => {
      [this.minMSB.value, this.minLSB.value] = String(mins).padStart(2, '0').split('');
      [this.secMSB.value, this.secLSB.value] = String(secs).padStart(2, '0').split('');
    };
  }
  
  const timer = new Timer('minMSB', 'minLSB', 'secMSB', 'secLSB', 'start', 'stop', 'reset', 'display');
  document.getElementById('display').addEventListener('input', timer.onInput);
  document.body.addEventListener('click', timer.onClick);
  