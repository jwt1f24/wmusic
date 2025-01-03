// Show & Hide Navbar effects
const navbarSwitch = document.getElementById('list-button');
const navbar = document.getElementById('sidebar');
const homeBanner = document.getElementById('home');
const services = document.querySelectorAll('#serviceCategory');

navbarSwitch.addEventListener('click', function(event) {
    if (navbar.style.left === '-200px') {
        navbar.style.left = '0';
        homeBanner.style.marginLeft = '15%';
    } else {
        navbar.style.left = '-200px';
        homeBanner.style.marginLeft = '0';
    }

    services.forEach(services => {
        if (services.style.marginLeft === '0%') {
            services.style.marginLeft = '15%';
        } else {
            services.style.marginLeft = '0%';
        }
    });
});

// smooth navigation for gallery and its information pages
function gallery() {
  window.location.href = 'gallery.html';
}
function gallery1() {
  window.location.href = 'i1.html';
}
function gallery2() {
  window.location.href = 'i2.html';
}
function gallery3() {
  window.location.href = 'i3.html';
}
function gallery4() {
  window.location.href = 'i4.html';
}

// Timetable month switching
const January = document.getElementById('January');
const JanT = document.getElementById('jan-title');
const JanBtn = document.getElementById('jan-btn');

const February = document.getElementById('February');
const FebT = document.getElementById('feb-title');
const FebBtn = document.getElementById('feb-btn');

const March = document.getElementById('March');
const MarT = document.getElementById('mar-title');
const MarBtn = document.getElementById('mar-btn');

const April = document.getElementById('April');
const AprT = document.getElementById('apr-title');
const AprBtn = document.getElementById('apr-btn');

const May = document.getElementById('May');
const MayT = document.getElementById('may-title');
const MayBtn = document.getElementById('may-btn');

const June = document.getElementById('June');
const JunT = document.getElementById('jun-title');
const JunBtn = document.getElementById('jun-btn');

const July = document.getElementById('July');
const JulT = document.getElementById('jul-title');
const JulBtn = document.getElementById('jul-btn');

const August = document.getElementById('August');
const AugT = document.getElementById('aug-title');
const AugBtn = document.getElementById('aug-btn');

const September = document.getElementById('September');
const SepT = document.getElementById('sep-title');
const SepBtn = document.getElementById('sep-btn');

const October = document.getElementById('October');
const OctT = document.getElementById('oct-title');
const OctBtn = document.getElementById('oct-btn');

const November = document.getElementById('November');
const NovT = document.getElementById('nov-title');
const NovBtn = document.getElementById('nov-btn');

const December = document.getElementById('December');
const DecT = document.getElementById('dec-title');
const DecBtn = document.getElementById('dec-btn');

function month1() { // return to January
  if (February.style.display = 'block') {
    FebT.style.display = 'none';
    February.style.display = 'none';
    FebBtn.style.display = 'none';

    JanT.style.display = 'block';
    January.style.display = 'block';
    JanBtn.style.display = 'block';
  }
}

function month2() { // go to February
  if (January.style.display = 'block') {
    JanT.style.display = 'none';
    January.style.display = 'none';
    JanBtn.style.display = 'none';

    FebT.style.display = 'block';
    February.style.display = 'block';
    FebBtn.style.display = 'block';
  }
}

function month2b() { // return to February
  if (March.style.display = 'block') {
    MarT.style.display = 'none';
    March.style.display = 'none';
    MarBtn.style.display = 'none';

    FebT.style.display = 'block';
    February.style.display = 'block';
    FebBtn.style.display = 'block';
  }
}

function month3() { // go to March
  if (February.style.display = 'block') {
    FebT.style.display = 'none';
    February.style.display = 'none';
    FebBtn.style.display = 'none';

    MarT.style.display = 'block';
    March.style.display = 'block';
    MarBtn.style.display = 'block';
  }
}

function month3b() { // return to March
  if (April.style.display = 'block') {
    AprT.style.display = 'none';
    April.style.display = 'none';
    AprBtn.style.display = 'none';

    MarT.style.display = 'block';
    March.style.display = 'block';
    MarBtn.style.display = 'block';
  }
}

function month4() {
  if (March.style.display = 'block') { // go to April
    MarT.style.display = 'none';
    March.style.display = 'none';
    MarBtn.style.display = 'none';

    AprT.style.display = 'block';
    April.style.display = 'block';
    AprBtn.style.display = 'block';
  }
}

function month4b() { // return to April
  if (May.style.display = 'block') {
    MayT.style.display = 'none';
    May.style.display = 'none';
    MayBtn.style.display = 'none';

    AprT.style.display = 'block';
    April.style.display = 'block';
    AprBtn.style.display = 'block';
  }
}

function month5() {
  if (April.style.display = 'block') { // go to May
    AprT.style.display = 'none';
    April.style.display = 'none';
    AprBtn.style.display = 'none';

    MayT.style.display = 'block';
    May.style.display = 'block';
    MayBtn.style.display = 'block';
  }
}

function month5b() { // return to May
  if (June.style.display = 'block') {
    JunT.style.display = 'none';
    June.style.display = 'none';
    JunBtn.style.display = 'none';

    MayT.style.display = 'block';
    May.style.display = 'block';
    MayBtn.style.display = 'block';
  }
}

function month6() {
  if (May.style.display = 'block') { // go to June
    MayT.style.display = 'none';
    May.style.display = 'none';
    MayBtn.style.display = 'none';

    JunT.style.display = 'block';
    June.style.display = 'block';
    JunBtn.style.display = 'block';
  }
}

function month6b() { // return to June
  if (July.style.display = 'block') {
    JulT.style.display = 'none';
    July.style.display = 'none';
    JulBtn.style.display = 'none';

    JunT.style.display = 'block';
    June.style.display = 'block';
    JunBtn.style.display = 'block';
  }
}

function month7() {
  if (June.style.display = 'block') { // go to July
    JunT.style.display = 'none';
    June.style.display = 'none';
    JunBtn.style.display = 'none';

    JulT.style.display = 'block';
    July.style.display = 'block';
    JulBtn.style.display = 'block';
  }
}

function month7b() { // return to July
  if (August.style.display = 'block') {
    AugT.style.display = 'none';
    August.style.display = 'none';
    AugBtn.style.display = 'none';

    JulT.style.display = 'block';
    July.style.display = 'block';
    JulBtn.style.display = 'block';
  }
}

function month8() {
  if (July.style.display = 'block') { // go to August
    JulT.style.display = 'none';
    July.style.display = 'none';
    JulBtn.style.display = 'none';

    AugT.style.display = 'block';
    August.style.display = 'block';
    AugBtn.style.display = 'block';
  }
}

function month8b() { // return to August
  if (September.style.display = 'block') {
    SepT.style.display = 'none';
    September.style.display = 'none';
    SepBtn.style.display = 'none';

    AugT.style.display = 'block';
    August.style.display = 'block';
    AugBtn.style.display = 'block';
  }
}

function month9() {
  if (August.style.display = 'block') { // go to September
    AugT.style.display = 'none';
    August.style.display = 'none';
    AugBtn.style.display = 'none';

    SepT.style.display = 'block';
    September.style.display = 'block';
    SepBtn.style.display = 'block';
  }
}

function month9b() { // return to September
  if (October.style.display = 'block') {
    OctT.style.display = 'none';
    October.style.display = 'none';
    OctBtn.style.display = 'none';

    SepT.style.display = 'block';
    September.style.display = 'block';
    SepBtn.style.display = 'block';
  }
}

function month10() {
  if (September.style.display = 'block') { // go to October
    SepT.style.display = 'none';
    September.style.display = 'none';
    SepBtn.style.display = 'none';

    OctT.style.display = 'block';
    October.style.display = 'block';
    OctBtn.style.display = 'block';
  }
}

function month10b() { // return to October
  if (November.style.display = 'block') {
    NovT.style.display = 'none';
    November.style.display = 'none';
    NovBtn.style.display = 'none';

    OctT.style.display = 'block';
    October.style.display = 'block';
    OctBtn.style.display = 'block';
  }
}

function month11() {
  if (October.style.display = 'block') { // go to November
    OctT.style.display = 'none';
    October.style.display = 'none';
    OctBtn.style.display = 'none';

    NovT.style.display = 'block';
    November.style.display = 'block';
    NovBtn.style.display = 'block';
  }
}

function month11b() { // return to November
  if (December.style.display = 'block') {
    DecT.style.display = 'none';
    December.style.display = 'none';
    DecBtn.style.display = 'none';

    NovT.style.display = 'block';
    November.style.display = 'block';
    NovBtn.style.display = 'block';
  }
}

function month12() {
  if (November.style.display = 'block') { // go to December
    NovT.style.display = 'none';
    November.style.display = 'none';
    NovBtn.style.display = 'none';

    DecT.style.display = 'block';
    December.style.display = 'block';
    DecBtn.style.display = 'block';
  }
}

// lesson schedule system
// display message when a time slot is clicked on
// individual time slots
const emptySlots = document.querySelectorAll('#empty');
const classP = document.querySelectorAll('#class-p');
const classG = document.querySelectorAll('#class-g');
const classV = document.querySelectorAll('#class-v');
const classC = document.querySelectorAll('#class-c');

// detail message box
const detailBox = document.getElementById('schedule-details-container');
const slotE = document.getElementById('empty-slot');
const slotP = document.getElementById('p-slot');
const slotG = document.getElementById('g-slot');
const slotV = document.getElementById('v-slot');
const slotC = document.getElementById('c-slot');

// compile the messages into a list for easier grouping
const slotList = [slotE, slotP, slotG, slotV, slotC];

// when empty slots are clicked on
emptySlots.forEach(emptySlots => {
  emptySlots.addEventListener('click', function(event) {
    detailBox.style.display = 'block';
    slotE.style.display = 'block';
    
    slotList.forEach((slot) => {
      if (slot !== slotE) {
        slot.style.display = 'none';
      }
    });
  });
});

classP.forEach(classP => {
  classP.addEventListener('click', function(event) {
    detailBox.style.display = 'block';
    slotP.style.display = 'block';
    
    slotList.forEach((slot) => {
      if (slot !== slotP) {
        slot.style.display = 'none';
      }
    });
  });
});

classG.forEach(classG => {
  classG.addEventListener('click', function(event) {
    detailBox.style.display = 'block';
    slotG.style.display = 'block';

    slotList.forEach((slot) => {
      if (slot !== slotG) {
        slot.style.display = 'none';
      }
    });
  });
});

classV.forEach(classV => {
  classV.addEventListener('click', function(event) {
    detailBox.style.display = 'block';
    slotV.style.display = 'block';

    slotList.forEach((slot) => {
      if (slot !== slotV) {
        slot.style.display = 'none';
      }
    });
  });
});

classC.forEach(classC => {
  classC.addEventListener('click', function(event) {
    detailBox.style.display = 'block';
    slotC.style.display = 'block';

    slotList.forEach((slot) => {
      if (slot !== slotC) {
        slot.style.display = 'none';
      }
    });
  });
});

// when the 'X' button is clicked in the detail pop up
function closeDetail() {
    detailBox.style.display = 'none';
}

// Progress Tracker tab switcher
function trackerTab(tab) {
  // list content
  const beginner = document.getElementById('beginner');
  const intermediate = document.getElementById('intermediate');
  const advanced = document.getElementById('advanced');

  // tab buttons
  const btnb = document.getElementById('btn-b');
  const btni = document.getElementById('btn-i');
  const btna = document.getElementById('btn-a');

  if (tab === 'beginner') { // when beginner tab is clicked
    beginner.style.display = 'block';
    btnb.style.backgroundColor = 'rgb(0, 149, 255)';
    btnb.style.borderColor = 'rgb(0, 149, 255)';

    intermediate.style.display = 'none';
    btni.style.backgroundColor = 'rgb(0, 98, 10)';
    btni.style.borderColor = 'rgb(0, 98, 10)';

    advanced.style.display = 'none';
    btna.style.backgroundColor = 'rgb(98, 0, 0)';
    btna.style.borderColor = 'rgb(98, 0, 0)';
  } 
  else if (tab === 'intermediate') { // when intermediate tab is clicked
    beginner.style.display = 'none';
    btnb.style.backgroundColor = 'rgb(15, 0, 90)';
    btnb.style.borderColor = 'rgb(15, 0, 90)';

    intermediate.style.display = 'block';
    btni.style.backgroundColor = 'rgb(0, 255, 10)';
    btni.style.borderColor = 'rgb(0, 255, 10)';

    advanced.style.display = 'none';
    btna.style.backgroundColor = 'rgb(98, 0, 0)';
    btna.style.borderColor = 'rgb(98, 0, 0)';
  } 
  else if (tab === 'advanced') { // when advanced tab is clicked
    beginner.style.display = 'none';
    btnb.style.backgroundColor = 'rgb(15, 0, 90)';
    btnb.style.borderColor = 'rgb(15, 0, 90)';

    intermediate.style.display = 'none';
    btni.style.backgroundColor = 'rgb(0, 98, 10)';
    btni.style.borderColor = 'rgb(0, 98, 10)';

    advanced.style.display = 'block';
    btna.style.backgroundColor = 'rgb(255, 0, 0)';
    btna.style.borderColor = 'rgb(255, 0, 0)';
  }
}

// Startup the page with beginner tab active
window.onload = trackerTab('beginner');

// Assignment practice section
function submitAns(ans) {
  const Q1 = document.getElementById('q1');
  const Q2 = document.getElementById('q2');
  const Q3 = document.getElementById('q3');

  const correct1 = document.getElementById('correct1');
  const incorrect1 = document.getElementById('incorrect1');
  const correct2 = document.getElementById('correct2');
  const incorrect2 = document.getElementById('incorrect2');
  const correct3 = document.getElementById('correct3');
  const incorrect3 = document.getElementById('incorrect3');

  const results = document.getElementById('resultForm');

  // display whether answer is correct or wrong
  if (ans === 1) {
    Q1.style.display = 'none';
    correct1.style.display = 'block';
  } else if (ans === 2) {
    Q1.style.display = 'none';
    incorrect1.style.display = 'block';
  } else if (ans === 3) {
    Q1.style.display = 'none';
    incorrect1.style.display = 'block';
  }

  if (ans === 4) {
    Q2.style.display = 'none';
    incorrect2.style.display = 'block';
  } else if (ans === 5) {
    Q2.style.display = 'none';
    incorrect2.style.display = 'block';
  } else if (ans === 6) {
    Q2.style.display = 'none';
    correct2.style.display = 'block';
  }

  if (ans === 7) {
    Q3.style.display = 'none';
    incorrect3.style.display = 'block';
  } else if (ans === 8) {
    Q3.style.display = 'none';
    correct3.style.display = 'block';
  } else if (ans === 9) {
    Q3.style.display = 'none';
    incorrect3.style.display = 'block';
  }

  // continue to next question
  if (ans === 'continue1') {
    correct1.style.display = 'none';
    incorrect1.style.display = 'none';
    Q2.style.display = 'block';
  }

  if (ans === 'continue2') {
    correct2.style.display = 'none';
    incorrect2.style.display = 'none';
    Q3.style.display = 'block';
  }

  if (ans === 'continue3') {
    correct3.style.display = 'none';
    incorrect3.style.display = 'none';
    results.style.display = 'block';
  }

  // go back to the first question
  if (ans === 'retry') {
    results.style.display = 'none';
    Q1.style.display = 'block';
  }
}

// close current window and return to assignments page when return button is clicked
function windowClose() {
  window.close();
}