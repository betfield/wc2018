import decimalToRoman from './helpers/roman';

Meteor.startup(function () {

var fixtures = [{"competition":"WC2018","group":"A","round":1,"day":"N","date":"14.juuni","time":"18:00","ts":"2018-06-14T16:00:00","city":"Moscow","stadium":"","home_team":{"name_eng":"Russia","name":"Venemaa","code":"rus","group":"A"},"away_team":{"name_eng":"Saudi Arabia","name":"Saudi Araabia","code":"ksa","group":"A"}},
{"competition":"WC2018","group":"A","round":1,"day":"R","date":"15.juuni","time":"15:00","ts":"2018-06-15T13:00:00","city":"Yekaterinburg","stadium":"","home_team":{"name_eng":"Egypt","name":"Egiptus","code":"egy","group":"A"},"away_team":{"name_eng":"Uruguay","name":"Uruguai","code":"uru","group":"A"}},
{"competition":"WC2018","group":"B","round":1,"day":"R","date":"15.juuni","time":"18:00","ts":"2018-06-15T16:00:00","city":"Saint Petersburg","stadium":"","home_team":{"name_eng":"Morocco","name":"Maroko","code":"mor","group":"B"},"away_team":{"name_eng":"Iran","name":"Iraan","code":"irn","group":"B"}},
{"competition":"WC2018","group":"B","round":1,"day":"R","date":"15.juuni","time":"21:00","ts":"2018-06-15T19:00:00","city":"Sochi","stadium":"","home_team":{"name_eng":"Portugal","name":"Portugal","code":"por","group":"B"},"away_team":{"name_eng":"Spain","name":"Hispaania","code":"esp","group":"B"}},
{"competition":"WC2018","group":"C","round":1,"day":"L","date":"16.juuni","time":"13:00","ts":"2018-06-16T11:00:00","city":"Kazan","stadium":"","home_team":{"name_eng":"France","name":"Prantsusmaa","code":"fra","group":"C"},"away_team":{"name_eng":"Australia","name":"Austraalia","code":"aus","group":"C"}},
{"competition":"WC2018","group":"D","round":1,"day":"L","date":"16.juuni","time":"16:00","ts":"2018-06-16T14:00:00","city":"Moscow","stadium":"","home_team":{"name_eng":"Argentina","name":"Argentiina","code":"arg","group":"D"},"away_team":{"name_eng":"Iceland","name":"Island","code":"isl","group":"D"}},
{"competition":"WC2018","group":"C","round":1,"day":"L","date":"16.juuni","time":"19:00","ts":"2018-06-16T17:00:00","city":"Saransk","stadium":"","home_team":{"name_eng":"Peru","name":"Peruu","code":"per","group":"C"},"away_team":{"name_eng":"Denmark","name":"Taani","code":"den","group":"C"}},
{"competition":"WC2018","group":"D","round":1,"day":"L","date":"16.juuni","time":"22:00","ts":"2018-06-16T20:00:00","city":"Kaliningrad","stadium":"","home_team":{"name_eng":"Croatia","name":"Horvaatia","code":"cro","group":"D"},"away_team":{"name_eng":"Nigeria","name":"Nigeeria","code":"nga","group":"D"}},
{"competition":"WC2018","group":"E","round":1,"day":"P","date":"17.juuni","time":"15:00","ts":"2018-06-17T13:00:00","city":"Samara","stadium":"","home_team":{"name_eng":"Costa Rica","name":"Costa Rica","code":"crc","group":"E"},"away_team":{"name_eng":"Serbia","name":"Serbia","code":"srb","group":"E"}},
{"competition":"WC2018","group":"F","round":1,"day":"P","date":"17.juuni","time":"18:00","ts":"2018-06-17T16:00:00","city":"Moscow","stadium":"","home_team":{"name_eng":"Germany","name":"Saksamaa","code":"ger","group":"F"},"away_team":{"name_eng":"Mexico","name":"Mehhiko","code":"mex","group":"F"}},
{"competition":"WC2018","group":"E","round":1,"day":"P","date":"17.juuni","time":"21:00","ts":"2018-06-17T19:00:00","city":"Rostov-on-Don","stadium":"","home_team":{"name_eng":"Brazil","name":"Brasiilia","code":"bra","group":"E"},"away_team":{"name_eng":"Switzerland","name":"Šveits","code":"sui","group":"E"}},
{"competition":"WC2018","group":"F","round":1,"day":"E","date":"18.juuni","time":"15:00","ts":"2018-06-18T13:00:00","city":"Nizhny Novgorod","stadium":"","home_team":{"name_eng":"Sweden","name":"Rootsi","code":"swe","group":"F"},"away_team":{"name_eng":"South Korea","name":"Lõuna-Korea","code":"kor","group":"F"}},
{"competition":"WC2018","group":"G","round":1,"day":"E","date":"18.juuni","time":"18:00","ts":"2018-06-18T16:00:00","city":"Sochi","stadium":"","home_team":{"name_eng":"Belgium","name":"Belgia","code":"bel","group":"G"},"away_team":{"name_eng":"Panama","name":"Panama","code":"pan","group":"G"}},
{"competition":"WC2018","group":"G","round":1,"day":"E","date":"18.juuni","time":"21:00","ts":"2018-06-18T19:00:00","city":"Volgograd","stadium":"","home_team":{"name_eng":"Tunisia","name":"Tuneesia","code":"tun","group":"G"},"away_team":{"name_eng":"England","name":"Inglismaa","code":"eng","group":"G"}},
{"competition":"WC2018","group":"H","round":1,"day":"T","date":"19.juuni","time":"15:00","ts":"2018-06-19T13:00:00","city":"Saransk","stadium":"","home_team":{"name_eng":"Colombia","name":"Kolumbia","code":"col","group":"H"},"away_team":{"name_eng":"Japan","name":"Jaapan","code":"jpn","group":"H"}},
{"competition":"WC2018","group":"H","round":1,"day":"T","date":"19.juuni","time":"18:00","ts":"2018-06-19T16:00:00","city":"Moscow","stadium":"","home_team":{"name_eng":"Poland","name":"Poola","code":"pol","group":"H"},"away_team":{"name_eng":"Senegal","name":"Senegal","code":"sen","group":"H"}},
{"competition":"WC2018","group":"A","round":2,"day":"T","date":"19.juuni","time":"21:00","ts":"2018-06-19T19:00:00","city":"Saint Petersburg","stadium":"","home_team":{"name_eng":"Russia","name":"Venemaa","code":"rus","group":"A"},"away_team":{"name_eng":"Egypt","name":"Egiptus","code":"egy","group":"A"}},
{"competition":"WC2018","group":"B","round":2,"day":"K","date":"20.juuni","time":"15:00","ts":"2018-06-20T13:00:00","city":"Moscow","stadium":"","home_team":{"name_eng":"Portugal","name":"Portugal","code":"por","group":"B"},"away_team":{"name_eng":"Morocco","name":"Maroko","code":"mor","group":"B"}},
{"competition":"WC2018","group":"A","round":2,"day":"K","date":"20.juuni","time":"18:00","ts":"2018-06-20T16:00:00","city":"Rostov-on-Don","stadium":"","home_team":{"name_eng":"Uruguay","name":"Uruguai","code":"uru","group":"A"},"away_team":{"name_eng":"Saudi Arabia","name":"Saudi Araabia","code":"ksa","group":"A"}},
{"competition":"WC2018","group":"B","round":2,"day":"K","date":"20.juuni","time":"21:00","ts":"2018-06-20T19:00:00","city":"Kazan","stadium":"","home_team":{"name_eng":"Iran","name":"Iraan","code":"irn","group":"B"},"away_team":{"name_eng":"Spain","name":"Hispaania","code":"esp","group":"B"}},
{"competition":"WC2018","group":"C","round":2,"day":"N","date":"21.juuni","time":"15:00","ts":"2018-06-21T13:00:00","city":"Samara","stadium":"","home_team":{"name_eng":"Denmark","name":"Taani","code":"den","group":"C"},"away_team":{"name_eng":"Australia","name":"Austraalia","code":"aus","group":"C"}},
{"competition":"WC2018","group":"C","round":2,"day":"N","date":"21.juuni","time":"18:00","ts":"2018-06-21T16:00:00","city":"Yekaterinburg","stadium":"","home_team":{"name_eng":"France","name":"Prantsusmaa","code":"fra","group":"C"},"away_team":{"name_eng":"Peru","name":"Peruu","code":"per","group":"C"}},
{"competition":"WC2018","group":"D","round":2,"day":"N","date":"21.juuni","time":"21:00","ts":"2018-06-21T19:00:00","city":"Nizhny Novgorod","stadium":"","home_team":{"name_eng":"Argentina","name":"Argentiina","code":"arg","group":"D"},"away_team":{"name_eng":"Croatia","name":"Horvaatia","code":"cro","group":"D"}},
{"competition":"WC2018","group":"E","round":2,"day":"R","date":"22.juuni","time":"15:00","ts":"2018-06-22T13:00:00","city":"Saint Petersburg","stadium":"","home_team":{"name_eng":"Brazil","name":"Brasiilia","code":"bra","group":"E"},"away_team":{"name_eng":"Costa Rica","name":"Costa Rica","code":"crc","group":"E"}},
{"competition":"WC2018","group":"D","round":2,"day":"R","date":"22.juuni","time":"18:00","ts":"2018-06-22T16:00:00","city":"Volgograd","stadium":"","home_team":{"name_eng":"Nigeria","name":"Nigeeria","code":"nga","group":"D"},"away_team":{"name_eng":"Iceland","name":"Island","code":"isl","group":"D"}},
{"competition":"WC2018","group":"E","round":2,"day":"R","date":"22.juuni","time":"21:00","ts":"2018-06-22T19:00:00","city":"Kaliningrad","stadium":"","home_team":{"name_eng":"Serbia","name":"Serbia","code":"srb","group":"E"},"away_team":{"name_eng":"Switzerland","name":"Šveits","code":"sui","group":"E"}},
{"competition":"WC2018","group":"G","round":2,"day":"L","date":"23.juuni","time":"15:00","ts":"2018-06-23T13:00:00","city":"Moscow","stadium":"","home_team":{"name_eng":"Belgium","name":"Belgia","code":"bel","group":"G"},"away_team":{"name_eng":"Tunisia","name":"Tuneesia","code":"tun","group":"G"}},
{"competition":"WC2018","group":"F","round":2,"day":"L","date":"23.juuni","time":"18:00","ts":"2018-06-23T16:00:00","city":"Rostov-on-Don","stadium":"","home_team":{"name_eng":"South Korea","name":"Lõuna-Korea","code":"kor","group":"F"},"away_team":{"name_eng":"Mexico","name":"Mehhiko","code":"mex","group":"F"}},
{"competition":"WC2018","group":"F","round":2,"day":"L","date":"23.juuni","time":"21:00","ts":"2018-06-23T19:00:00","city":"Sochi","stadium":"","home_team":{"name_eng":"Germany","name":"Saksamaa","code":"ger","group":"F"},"away_team":{"name_eng":"Sweden","name":"Rootsi","code":"swe","group":"F"}},
{"competition":"WC2018","group":"G","round":2,"day":"P","date":"24.juuni","time":"15:00","ts":"2018-06-24T13:00:00","city":"Nizhny Novgorod","stadium":"","home_team":{"name_eng":"England","name":"Inglismaa","code":"eng","group":"G"},"away_team":{"name_eng":"Panama","name":"Panama","code":"pan","group":"G"}},
{"competition":"WC2018","group":"H","round":2,"day":"P","date":"24.juuni","time":"18:00","ts":"2018-06-24T16:00:00","city":"Yekaterinburg","stadium":"","home_team":{"name_eng":"Japan","name":"Jaapan","code":"jpn","group":"H"},"away_team":{"name_eng":"Senegal","name":"Senegal","code":"sen","group":"H"}},
{"competition":"WC2018","group":"H","round":2,"day":"P","date":"24.juuni","time":"21:00","ts":"2018-06-24T19:00:00","city":"Kazan","stadium":"","home_team":{"name_eng":"Poland","name":"Poola","code":"pol","group":"H"},"away_team":{"name_eng":"Colombia","name":"Kolumbia","code":"col","group":"H"}},
{"competition":"WC2018","group":"A","round":3,"day":"E","date":"25.juuni","time":"17:00","ts":"2018-06-25T15:00:00","city":"Samara","stadium":"","home_team":{"name_eng":"Uruguay","name":"Uruguai","code":"uru","group":"A"},"away_team":{"name_eng":"Russia","name":"Venemaa","code":"rus","group":"A"}},
{"competition":"WC2018","group":"A","round":3,"day":"E","date":"25.juuni","time":"17:00","ts":"2018-06-25T15:00:00","city":"Volgograd","stadium":"","home_team":{"name_eng":"Saudi Arabia","name":"Saudi Araabia","code":"ksa","group":"A"},"away_team":{"name_eng":"Egypt","name":"Egiptus","code":"egy","group":"A"}},
{"competition":"WC2018","group":"B","round":3,"day":"E","date":"25.juuni","time":"21:00","ts":"2018-06-25T19:00:00","city":"Saransk","stadium":"","home_team":{"name_eng":"Iran","name":"Iraan","code":"irn","group":"B"},"away_team":{"name_eng":"Portugal","name":"Portugal","code":"por","group":"B"}},
{"competition":"WC2018","group":"B","round":3,"day":"E","date":"25.juuni","time":"21:00","ts":"2018-06-25T19:00:00","city":"Kaliningrad","stadium":"","home_team":{"name_eng":"Spain","name":"Hispaania","code":"esp","group":"B"},"away_team":{"name_eng":"Morocco","name":"Maroko","code":"mor","group":"B"}},
{"competition":"WC2018","group":"C","round":3,"day":"T","date":"26.juuni","time":"17:00","ts":"2018-06-26T15:00:00","city":"Moscow","stadium":"","home_team":{"name_eng":"Denmark","name":"Taani","code":"den","group":"C"},"away_team":{"name_eng":"France","name":"Prantsusmaa","code":"fra","group":"C"}},
{"competition":"WC2018","group":"C","round":3,"day":"T","date":"26.juuni","time":"17:00","ts":"2018-06-26T15:00:00","city":"Sochi","stadium":"","home_team":{"name_eng":"Australia","name":"Austraalia","code":"aus","group":"C"},"away_team":{"name_eng":"Peru","name":"Peruu","code":"per","group":"C"}},
{"competition":"WC2018","group":"D","round":3,"day":"T","date":"26.juuni","time":"21:00","ts":"2018-06-26T19:00:00","city":"Saint Petersburg","stadium":"","home_team":{"name_eng":"Nigeria","name":"Nigeeria","code":"nga","group":"D"},"away_team":{"name_eng":"Argentina","name":"Argentiina","code":"arg","group":"D"}},
{"competition":"WC2018","group":"D","round":3,"day":"T","date":"26.juuni","time":"21:00","ts":"2018-06-26T19:00:00","city":"Rostov-on-Don","stadium":"","home_team":{"name_eng":"Iceland","name":"Island","code":"isl","group":"D"},"away_team":{"name_eng":"Croatia","name":"Horvaatia","code":"cro","group":"D"}},
{"competition":"WC2018","group":"F","round":3,"day":"K","date":"27.juuni","time":"17:00","ts":"2018-06-27T15:00:00","city":"Kazan","stadium":"","home_team":{"name_eng":"South Korea","name":"Lõuna-Korea","code":"kor","group":"F"},"away_team":{"name_eng":"Germany","name":"Saksamaa","code":"ger","group":"F"}},
{"competition":"WC2018","group":"F","round":3,"day":"K","date":"27.juuni","time":"17:00","ts":"2018-06-27T15:00:00","city":"Yekaterinburg","stadium":"","home_team":{"name_eng":"Mexico","name":"Mehhiko","code":"mex","group":"F"},"away_team":{"name_eng":"Sweden","name":"Rootsi","code":"swe","group":"F"}},
{"competition":"WC2018","group":"E","round":3,"day":"K","date":"27.juuni","time":"21:00","ts":"2018-06-27T19:00:00","city":"Moscow","stadium":"","home_team":{"name_eng":"Serbia","name":"Serbia","code":"srb","group":"E"},"away_team":{"name_eng":"Brazil","name":"Brasiilia","code":"bra","group":"E"}},
{"competition":"WC2018","group":"E","round":3,"day":"K","date":"27.juuni","time":"21:00","ts":"2018-06-27T19:00:00","city":"Nizhny Novgorod","stadium":"","home_team":{"name_eng":"Switzerland","name":"Šveits","code":"sui","group":"E"},"away_team":{"name_eng":"Costa Rica","name":"Costa Rica","code":"crc","group":"E"}},
{"competition":"WC2018","group":"H","round":3,"day":"N","date":"28.juuni","time":"17:00","ts":"2018-06-28T15:00:00","city":"Volgograd","stadium":"","home_team":{"name_eng":"Japan","name":"Jaapan","code":"jpn","group":"H"},"away_team":{"name_eng":"Poland","name":"Poola","code":"pol","group":"H"}},
{"competition":"WC2018","group":"H","round":3,"day":"N","date":"28.juuni","time":"17:00","ts":"2018-06-28T15:00:00","city":"Samara","stadium":"","home_team":{"name_eng":"Senegal","name":"Senegal","code":"sen","group":"H"},"away_team":{"name_eng":"Colombia","name":"Kolumbia","code":"col","group":"H"}},
{"competition":"WC2018","group":"G","round":3,"day":"N","date":"28.juuni","time":"21:00","ts":"2018-06-28T19:00:00","city":"Kaliningrad","stadium":"","home_team":{"name_eng":"England","name":"Inglismaa","code":"eng","group":"G"},"away_team":{"name_eng":"Belgium","name":"Belgia","code":"bel","group":"G"}},
{"competition":"WC2018","group":"G","round":3,"day":"N","date":"28.juuni","time":"21:00","ts":"2018-06-28T19:00:00","city":"Saransk","stadium":"","home_team":{"name_eng":"Panama","name":"Panama","code":"pan","group":"G"},"away_team":{"name_eng":"Tunisia","name":"Tuneesia","code":"tun","group":"G"}},
{"competition":"WC2018","group":"L16","round":4,"day":"L","date":"30.juuni","time":"17:00","ts":"2018-06-30T15:00:00","city":"Kazan","stadium":"","home_team":"C1","away_team":"D2"},
{"competition":"WC2018","group":"L16","round":4,"day":"L","date":"30.juuni","time":"21:00","ts":"2018-06-30T19:00:00","city":"Sochi","stadium":"","home_team":"A1","away_team":"B2"},
{"competition":"WC2018","group":"L16","round":4,"day":"P","date":"01.juuli","time":"17:00","ts":"2018-07-01T15:00:00","city":"Moscow","stadium":"","home_team":"B1","away_team":"A2"},
{"competition":"WC2018","group":"L16","round":4,"day":"P","date":"01.juuli","time":"21:00","ts":"2018-07-01T19:00:00","city":"Nizhny Novgorod","stadium":"","home_team":"D1","away_team":"C2"},
{"competition":"WC2018","group":"L16","round":4,"day":"E","date":"02.juuli","time":"17:00","ts":"2018-07-02T15:00:00","city":"Samara","stadium":"","home_team":"E1","away_team":"F2"},
{"competition":"WC2018","group":"L16","round":4,"day":"E","date":"02.juuli","time":"21:00","ts":"2018-07-02T19:00:00","city":"Rostov-on-Don","stadium":"","home_team":"G1","away_team":"H2"},
{"competition":"WC2018","group":"L16","round":4,"day":"T","date":"03.juuli","time":"17:00","ts":"2018-07-03T15:00:00","city":"Saint Petersburg","stadium":"","home_team":"F1","away_team":"E2"},
{"competition":"WC2018","group":"L16","round":4,"day":"T","date":"03.juuli","time":"21:00","ts":"2018-07-03T19:00:00","city":"Moscow","stadium":"","home_team":"H1","away_team":"G2"},
{"competition":"WC2018","group":"QF","round":5,"day":"R","date":"06.juuli","time":"17:00","ts":"2018-07-06T15:00:00","city":"Nizhny Novgorod","stadium":"","home_team":"Q1","away_team":"Q2"},
{"competition":"WC2018","group":"QF","round":5,"day":"R","date":"06.juuli","time":"21:00","ts":"2018-07-06T19:00:00","city":"Kazan","stadium":"","home_team":"Q3","away_team":"Q4"},
{"competition":"WC2018","group":"QF","round":5,"day":"L","date":"07.juuli","time":"17:00","ts":"2018-07-07T15:00:00","city":"Samara","stadium":"","home_team":"Q5","away_team":"Q6"},
{"competition":"WC2018","group":"QF","round":5,"day":"L","date":"07.juuli","time":"21:00","ts":"2018-07-07T19:00:00","city":"Sochi","stadium":"","home_team":"Q7","away_team":"Q8"},
{"competition":"WC2018","group":"SF","round":6,"day":"T","date":"10.juuli","time":"21:00","ts":"2018-07-10T19:00:00","city":"Saint Petersburg","stadium":"","home_team":"S1","away_team":"S2"},
{"competition":"WC2018","group":"SF","round":6,"day":"K","date":"11.juuli","time":"21:00","ts":"2018-07-11T19:00:00","city":"Moscow","stadium":"","home_team":"S3","away_team":"S4"},
{"competition":"WC2018","group":"3RD","round":7,"day":"L","date":"14.juuli","time":"17:00","ts":"2018-07-14T15:00:00","city":"Saint Petersburg","stadium":"","home_team":"L1","away_team":"L2"},
{"competition":"WC2018","group":"FI","round":7,"day":"P","date":"15.juuli","time":"18:00","ts":"2018-07-15T16:00:00","city":"Moscow","stadium":"","home_team":"W1","away_team":"W2"}]

	if (Fixtures.find({competition:'WC2018'}).count() != 64){
		fixtures.forEach(function(fixture){
			let f = {
				competition:fixture.competition,
				day:fixture.day,
				date:fixture.date,
				time:fixture.time,
				ts:fixture.ts,
				home_team:fixture.home_team,
				away_team:fixture.away_team,
				stadium:fixture.stadium,
				city:fixture.city,
				group:fixture.group,
				round:fixture.round,
				roundRoman: decimalToRoman(fixture.round),
				result: {
					home_goals: "",
					away_goals: ""
				},
				status: "NS",
				locked: false
			}

			//Add team flag image locations
			f.home_team.imgSrc = getFlagImage(f.home_team.code);
			f.away_team.imgSrc = getFlagImage(f.away_team.code);

			Fixtures.insert(f);
		}); // end of foreach Fixtures
		
		console.log("Startup Fixtures: " + Fixtures.find().count());
	
	} // end of if
	
});

//TODO: ImgSrc to be updated automatically on KO teams
getFlagImage = (teamCode) => {
	return Meteor.settings.public.FOLDER_FLAGS + String(teamCode).toLowerCase() + ".png";
}
