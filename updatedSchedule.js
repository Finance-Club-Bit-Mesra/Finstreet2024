document.addEventListener("DOMContentLoaded", function () {
    // Sample data for demonstration
    const schedules = {
        "day-19": [
            { time: "5:30 PM", event: "Inauguration", subEvents: ["Finstreet'24 Unveils, CAT HALL"] },
            { time: "18th-19th JAN", event: "Stalk The Stock", subEvents: ["Start Timing: 9:15 AM (18th January,2024)", "End Timing: 3:30 PM (19th January,2024)"]},
            { time: "06:15-7:15 PM", event: "Speaker Session: Khushi Panjwani", subEvents: ["Entrepreneur 40 U 40, Trader, TEDx Speaker","Shark Tank India S-3, World Record Holder, Author", "Venue: CAT HALL"] }
        
        ],

        "day-20": [
            { time: "11:00 AM", event: "Speaker Session: Abhishek Kar", subEvents: ["Youtuber, Investor & Stock Trader, TEDx","Venue: CAT HALL"] },
            { time: "11:00 AM", event: "Enigma", subEvents: ["Quiz", "Case Study Presentation","Venue: Seminar Hall -1"] },
            { time: "2:00 PM", event: "Market Kshetra", subEvents: ["Round 1- 17/01/2024 (Online- 10:00 PM)", "Round 2- 20/01/2024(Offline- 2:00 PM)","Venue: Room 202"] },
            { time: "02:30 PM", event: "Arth Anarth", subEvents: ["Financial Bingo Competition", "Mememania","Venue: Room 216"], },
            { time: "10:00 AM", event: "Chess", subEvents: ["Round 1- 20th Jan", "Finale on 21st Jan","Venue: Room 207"] }
            
            
        ],
        "day-21": [
            { time: "10:00 AM", event: "Behind The Stumps", subEvents: ["Round 1: 17/01/24-10:00PM (online)", "Round 2: 21/01/24 (offline)","Venue: Seminar Hall-1"] },
            { time: "11:00 AM", event: "House of Legacy", subEvents: [ "Round 1- 17/01/24 - 10:00PM(Online)", "Round 2- 21/01/24(Offline- 11:00am)","Venue: Room 207"] },
            { time: "11:00 AM", event: "Estimania", subEvents: ["Round 1- 20/01/24(offline- 10:30am)","Round 2- 21/01/24(offline- 11:00am)","Venue: Room 202"] },
            { time: "10:00 AM", event: "Chess Finals", subEvents: ["Round 1- 20th Jan", "Finale on 21st Jan","Venue: Room 216"] }
        ]
    };

    function populateSchedule(dayId, events) {
        const dayColumn = document.getElementById(dayId);

        if (dayColumn) {
            events.forEach(event => {
                const programElement = document.createElement("div");
                programElement.classList.add("program");

                const eventHeading = document.createElement("h3");
                eventHeading.textContent = `${event.time} - ${event.event}`;
                programElement.appendChild(eventHeading);

                if (event.subEvents && event.subEvents.length > 0) {
                    const subEventsList = document.createElement("ul");
                    event.subEvents.forEach(subEvent => {
                        const subEventItem = document.createElement("li");
                        subEventItem.textContent = subEvent;
                        subEventsList.appendChild(subEventItem);
                    });
                    programElement.appendChild(subEventsList);
                }

                dayColumn.appendChild(programElement);
            });
        }
    }

    // Populate schedules for each day
    populateSchedule("day-19", schedules["day-19"]);
    populateSchedule("day-20", schedules["day-20"]);
    populateSchedule("day-21", schedules["day-21"]);
});
