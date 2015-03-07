(function($){
	$(document).ready(function(){

		$.datepicker.regional['de'] = {
			clearText: 'löschen',
			clearStatus: 'aktuelles Datum löschen',
			changeMonth: false,
			closeText: 'schließen',
			closeStatus: 'ohne Änderungen schließen',
			prevText: '<<',
			prevStatus: 'letzten Monat zeigen',
			nextText: '>>',
			nextStatus: 'nächsten Monat zeigen',
			currentText: 'heute',
			currentStatus: '',
			monthNames: ['Januar','Februar','März','April','Mai','Juni', 'Juli','August','September','Oktober','November','Dezember'],
			monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun', 'Jul','Aug','Sep','Okt','Nov','Dez'],
			monthStatus: 'anderen Monat anzeigen',
			yearStatus: 'anderes Jahr anzeigen',
			weekHeader: 'Wo',
			weekStatus: 'Woche des Monats',
			dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
			dayNamesShort: ['SO','MO','DI','MI','DO','FR','SA'],
			dayNamesMin: ['SO','MO','DI','MI','DO','FR','SA'],
			dayStatus: 'Setze DD als ersten Wochentag',
			dateStatus: 'Wähle D, M d',
			dateFormat: 'dd.mm.yy',
			firstDay: 1, // first day is Monday instead of Sunday
			initStatus: 'Wähle ein Datum',
			isRTL: false
		};

		// disable days without event
		function disableDaysWithoutEvent(date) {
			// format 2014-8-9
			var y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();

			if (typeof(DayMonthYearList) == 'undefined') return [false];
			if (DayMonthYearList[y + '-' + m + '-' + d]) {
				return [true];
			} else {
				return [false];
			}
		}

		var eventDatePicker = $('#tx-nak-events-datepicker');

		if (eventDatePicker.length) {
			eventDatePicker.datepicker({
				beforeShowDay: function(date) {
					return disableDaysWithoutEvent(date);
				},
				onSelect: function(dateText, inst) {
					var day = inst.selectedDay,
						month = inst.selectedMonth + 1,
						year = inst.selectedYear,
						href = window.location.href + (window.location.search.substring(0,1) == '?' ? "&" : '?') + 'eID=AUS\\nak-district-events-list-event&action=list&day='+day+'&month='+month+'&year='+year;

					$.fancybox({
						width: 552,
						height: 400,
						autoSize: false,
						href: href,
						type: 'ajax'
					});
				}
			});

			eventDatePicker.datepicker("option", $.datepicker.regional['de']);
		}
	});

})(jQuery);