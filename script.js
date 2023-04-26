
      function updateDate() {
        const now = new Date();
        const dateElem = document.getElementById('date');
        const dateStr = now.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
        dateElem.textContent = dateStr;
      }
      setInterval(updateDate, 1000);

      function updateWeekday() {
        const now = new Date();
        const weekdayElem = document.getElementById('day');
        const weekdayStr = now.toLocaleDateString('en-US', {weekday: 'long'});
        weekdayElem.textContent = weekdayStr;
      }
      setInterval(updateWeekday, 1000);

      function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        
        hours = hours ? hours : 12;
        const timeElem = document.getElementById('hours');
        const timeStr = hours;
        timeElem.textContent = timeStr;
      }
      setInterval(updateTime,1000);
      
      function updateMinute() {
        const now = new Date();
        let minutes = now.getMinutes();
       
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const timeElem = document.getElementById('minutes');
        const timeStr = minutes;
        timeElem.textContent = timeStr;
      }
      setInterval(updateMinute, 1000);

      function updateSeconds() {
        const now = new Date();
        let seconds = now.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
        const timeElem = document.getElementById('seconds');
        const timeStr = seconds;
        timeElem.textContent = timeStr;
      }
      setInterval(updateSeconds, 1000);


      function updateSession() {
        const now = new Date();
        let ampm = hours >= 12 ? 'AM' : 'PM';
        const timeElem = document.getElementById('session');
        const timeStr =ampm;
        timeElem.textContent = timeStr;
      }
      setInterval(updateSession, 1000);

      function myFunction() {
        const now = new Date();
        let hours = now.getHours();
        hours = hours % 12;
        hours = hours ? hours : 12;
        const timeElem = document.getElementById('hours');
        const timeStr = hours;
        timeElem.textContent = timeStr;
      }
      clearInterval(myFunction,1000);