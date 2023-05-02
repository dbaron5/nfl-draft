const nflDraftPicks = [
  {
    pickNumber: 1,
    team: "Jacksonville Jaguars",
    player: "Trevor Lawrence",
    position: "Quarterback",
    college: "Clemson",
  },
  {
    pickNumber: 2,
    team: "New York Jets",
    player: "Zach Wilson",
    position: "Quarterback",
    college: "BYU",
  },
  {
    pickNumber: 3,
    team: "San Francisco 49ers",
    player: "Trey Lance",
    position: "Quarterback",
    college: "North Dakota State",
  },
  {
    pickNumber: 4,
    team: "Atlanta Falcons",
    player: "Kyle Pitts",
    position: "Tight End",
    college: "Florida",
  },
];
const draft = document.querySelector(".draft");

for (const top4 of nflDraftPicks) {
  const pickNum = document.createElement("div");
  const nflteam = document.createElement("h1");
  const nflplayer = document.createElement("h2");
  const nflposition = document.createElement("h3");
  const draftedfromcollege = document.createElement("p");

  pickNum.innerText = top4.pickNumber;
  nflteam.innerText = top4.team;
  nflplayer.innerText = top4.player;
  nflposition.innerText = top4.position;
  draftedfromcollege.innerText = top4.college;
  pickNum.append(nflteam, nflplayer, nflposition, draftedfromcollege);
  draft.append(pickNum);
}
