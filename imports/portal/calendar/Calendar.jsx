import React, { Component } from 'react';

export default class Calendar extends Component {

	_getTitle = () => {
		return TAPi18n.__('calendar');
	}

	_getDescription = () => {
    	return TAPi18n.__('calendar_description');
	}
	  
	_getCategory  = () => {
    	return TAPi18n.__('calendar_category');
  	}

	componentDidMount() {
		$('.splash').css('display', 'none');

		// Initialize i-check plugin
		$('.i-checks').iCheck({
			checkboxClass: 'icheckbox_square-green',
			radioClass: 'iradio_square-green'
		});

		// Initialize the external events
		$('#external-events div.external-event').each(function() {

			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 1111999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});

		});
				
		var tsStart, tsEnd, firstFixtureDate;
		var fixtures = Fixtures.find();
		var calendar_fixtures = [];
		
		if (fixtures.count() !== 0) {
			fixtures.forEach(function (fixture){

				tsStart = new Date(fixture.ts);		
				tsEnd = new Date(fixture.ts);
				tsEnd.setHours(tsStart.getHours()+2); // set fixture end date 2h later 
				
				var title;
				var score;
				
				if (fixture.result && fixture.result.homeGoals && fixture.result.awayGoals) {
					score = " " + fixture.result.homeGoals + ":" + fixture.result.awayGoals;
				} else {
					score = "";
				}

				if (fixture.home_team.name == null) {
					title = fixture.home_team + " vs " + fixture.away_team + score;
				} else {
					title = fixture.home_team.name + " vs " + fixture.away_team.name + score;
				}
				
				calendar_fixtures.push({
					id: fixture._id,
					title: title,
					start: tsStart,
					end: tsEnd,
					allDay: false,
					url: "fixtures/" + fixture._id
				});

			}); // end of for
		
			firstFixtureDate = calendar_fixtures[0].start;
		} else {
			firstFixtureDate = new Date();
		};

		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			allDayDefault: false,
			views: {
				agendaWeek: {
					allDaySlot: false,
					slotLabelFormat: 'HH:mm',
					titleFormat: 'D MMMM YYYY',
					columnFormat: 'ddd D.MM'
				},
				agendaDay: {
					allDaySlot: false,
					slotLabelFormat: 'HH:mm',
					titleFormat: 'D MMMM YYYY'
				}
			},
			editable: false,
			droppable: false, // this allows things to be dropped onto the calendar
			events: calendar_fixtures,
			minTime: '16:00:00',
			aspectRatio: 'auto', // ratio of width-to-height - larger numbers make smaller heights
			timeFormat: 'HH:mm', // uppercase H for 24-hour clock
			timezone: 'local',
			firstDay: 1,
			defaultDate: firstFixtureDate,
			monthNames: [
					TAPi18n.__('month_jan'),
					TAPi18n.__('month_feb'),
					TAPi18n.__('month_mar'),
					TAPi18n.__('month_apr'),
					TAPi18n.__('month_may'),
					TAPi18n.__('month_jun'),
					TAPi18n.__('month_jul'),
					TAPi18n.__('month_aug'),
					TAPi18n.__('month_sep'),
					TAPi18n.__('month_oct'),
					TAPi18n.__('month_nov'),
					TAPi18n.__('month_dec')
			], 
			monthNamesShort: [
					TAPi18n.__('month_jan_s'),
					TAPi18n.__('month_feb_s'),
					TAPi18n.__('month_mar_s'),
					TAPi18n.__('month_apr_s'),
					TAPi18n.__('month_may_s'),
					TAPi18n.__('month_jun_s'),
					TAPi18n.__('month_jul_s'),
					TAPi18n.__('month_aug_s'),
					TAPi18n.__('month_sep_s'),
					TAPi18n.__('month_oct_s'),
					TAPi18n.__('month_nov_s'),
					TAPi18n.__('month_dec_s')
			], 
			dayNames: [
					TAPi18n.__('day_sun'),
					TAPi18n.__('day_mon'),
					TAPi18n.__('day_tue'),
					TAPi18n.__('day_wed'),
					TAPi18n.__('day_thu'),
					TAPi18n.__('day_fri'),
					TAPi18n.__('day_sat')
			], 
			dayNamesShort: [
					TAPi18n.__('day_sun_s'),
					TAPi18n.__('day_mon_s'),
					TAPi18n.__('day_tue_s'),
					TAPi18n.__('day_wed_s'),
					TAPi18n.__('day_thu_s'),
					TAPi18n.__('day_fri_s'),
					TAPi18n.__('day_sat_s')
			],
			buttonText: {
				today: TAPi18n.__('today'),
				month: TAPi18n.__('month'),
				week: TAPi18n.__('week'),
				day: TAPi18n.__('day')
			}
		});
	}

    render() {
        return (
			<div className="row">
				<div className="col-md-12 text-center">
                    <div className="hpanel">
                        <div className="panel-body login-panel">
							<div id="calendar"></div>
                    	</div>
                	</div>
            	</div>
			</div>	
		)
	}
}