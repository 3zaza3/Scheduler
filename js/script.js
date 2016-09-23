function validate(){
			if (document.newEvent.Title.value=="") {
				alert("Please add a title!");
				document.newEvent.Title.focus();
				return false;
			}
			if (document.newEvent.Date.value=="") {
				alert("Please add a date!");
				document.newEvent.Date.focus();
				return false;
			}
			if (document.newEvent.StartTime.value=="") {
				alert("Please add a start time!");
				document.newEvent.StartTime.focus();
				return false;
			}
			if (document.newEvent.EndTime.value=="") {
				alert("Please add a start time!");
				document.newEvent.EndTime.focus();
				return false;
			}
			if (document.newEvent.Type.value=="empty") {
				alert("Please choose a type!");
				document.newEvent.Type.focus();
				return false;
			}
			if (document.newEvent.Description.value=="") {
				alert("Please add description!");
				document.newEvent.Description.focus();
				return false;
			}
			if (document.newEvent.Alarm.value=="none") {
				alert("Please choose alarm!");
				document.newEvent.Description.focus();
				return false;
			}
			var mySchedule = {"Title":document.newEvent.Title.value,
								"Date":document.newEvent.Date.value,
								"StartTime":document.newEvent.StartTime.value,
								"EndTime":document.newEvent.EndTime.value,
								"Type":document.newEvent.Type.value,
								"Description":document.newEvent.Description.value,
								"Alarm":document.newEvent.Alarm.value
							}

							
							document.getElementById('hidden').style.display = 'none';
							document.getElementById('success').style.display = 'block';
			document.getElementById('display').innerHTML += "<b>Event Title: </b>"+ mySchedule.Title + "<br><br>";
			document.getElementById('display').innerHTML += "<b>Date: </b>"+ mySchedule.Date + "<br><br>";
			document.getElementById('display').innerHTML += "<b>Start Time: </b>"+ mySchedule.StartTime + "<br><br>";
			document.getElementById('display').innerHTML += "<b>End Time: </b>"+ mySchedule.EndTime + "<br><br>";
			document.getElementById('display').innerHTML += "<b>Description: </b>"+ mySchedule.Description + "<br><br>";
			document.getElementById('display').innerHTML += "<b>Alarm: </b>"+ mySchedule.Alarm + "<br><br>";


			return true;
		}