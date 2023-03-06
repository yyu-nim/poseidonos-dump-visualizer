const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document
    .querySelector("#greet-button")
    .addEventListener("click", () => greet());
});

var data = [{
  type: "treemap",
  ids: ["POSArray1", "POSArray2", "Devices1", "Devices2", "NVRAM1", "NVRAM2",
    "Partitions1", "Partitions2", "UramDevs1", "UnvmeDevs1", "MBR1", "META1", "JOURNAL1", "USER1",
    "Maps1", "VSAMap1", "StripeMap1"
  ],
  labels: ["POSArray1", "POSArray2", "Devices", "Devices", "NVRAM", "NVRAM",
    "Partitions", "Partitions", "UramDevs", "UnvmeDevs", "MBR", "META", "JOURNAL", "USERDATA",
    "Maps", "VSAMap", "StripeMap"
  ],
  parents: ["PoseidonOS", "PoseidonOS", "POSArray1", "POSArray2", "POSArray1", "POSArray2",
    "POSArray1", "POSArray2", "Devices1", "Devices1", "Partitions1", "Partitions1", "Partitions1", "Partitions1",
    "POSArray1", "Maps1", "Maps1"
  ],
  textposition: 'middle center',
  textfont: {
    color: 'white',
    size: 20
  },
  hoverinfo: 'label'
}];

// https://plotly.com/javascript/reference/treemap/
Plotly.newPlot('myDiv2', data);

var myPlot = document.getElementById('myDiv2');
myPlot.on('plotly_click', function(data) {
  var points = data["points"];
  var point = points[0];
  var id = point["id"];
  var label = point["label"];
  console.log('mouse clicked: id = ' + id + ', label = ' + label);
});
