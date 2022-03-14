"use strict";
// function findCateg() {
// const cc = document.getElementById("country").value;
// console.log(cc);
// let getcateg = fetch(`/find/categ/${cc}`);
// getcateg.then(async (res) => {
// const categs = await res.json();
// console.log(categs);
// });
// }
// findCateg();
let catMap = new Map();
catMap.set("None", 0);
let currentPage = 1;

const findCateg = async function () {
  currentPage = 1;
  const cc = document.getElementById("country").value;
  // console.log(cc);
  const getcateg = await fetch(`/find/categ/${cc}`);
  const categs = await getcateg.json();
  let datas = '<option value="None"></option>';
  // console.log(typeof categs);
  for (let i in categs.results) {
    // console.log(categs.results[i].label);
    catMap.set(categs.results[i].label, categs.results[i].tag);
    datas += `<option value="${categs.results[i].label}"></option>`;
  }
  document.getElementById("categList").innerHTML = datas;
};

const searchJobs = async function () {
  const cc = document.getElementById("country").value;
  const categ = catMap.get(document.getElementById("searchCateg").value);
  let url = new URL(location.origin + `/find/jobs/${cc}/${currentPage}`);
  currentPage++;
  let params = {};
  if (categ != 0) {
    params["category"] = categ;
  }
  if (params != {}) {
    url.search = new URLSearchParams(params).toString();
  }
  const getJobs = await fetch(url);
  const jobData = await getJobs.json();
  console.log(jobData);
  return false;
};
findCateg();
