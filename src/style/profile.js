export default {
  h4ColActive: {
    backgroundColor: "#4e0250",
    cursor: "pointer",
    color: "white",
    border: "#4e0250 thin solid",
    textAlign: "center"
  },
  h4ColInactive: {
    cursor: "pointer",
    textAlign: "center",
    color: "#4e0250",
    border: "#4e0250 thin solid"
  },
  donutChart: {
    pieHole: 0.4,
    fontName: "Questrial",
    colors: ['#c3ddce', '#58BC82'],
    legend: {position: "bottom"},
    tooltip: {trigger: "none"},
    animation: {duration: 1000, easing: 'out', startup: true},
    chartArea: {top: "5%"},
    pieSliceTextStyle: {fontSize: 16},
    slices: {0: {textStyle: {color: '#58BC82'}}}
  },
  columnChart: {
    isStacked: true,
    legend: {position: "bottom"},
    animation: {duration: 1000, easing: 'out', startup: true},
    chartArea: {top: "5%"},
    fontName: "Questrial",
    vAxis: {format: "short"}
  },
  lineChart: {
    legend: {position: "bottom"},
    animation: {duration: 1000, easing: 'out', startup: true},
    chartArea: {top: "5%"},
    fontName: "Questrial",
    vAxis: {format: "short"},
    curveType: 'function'
  },
  barChart: {
    isStacked: true,
    legend: {position: "bottom"},
    animation: {duration: 1000, easing: 'out', startup: true},
    chartArea: {top: "5%"},
    fontName: "Questrial",
    hAxis: {format: "short"}
  },
  buttonStyle: {
    backgroundColor: '#58BC82',
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "12px",
    marginTop: "10px",
    marginBottom: "20px",
    marginLeft: "20px"
  }
}
