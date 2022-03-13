function findCateg() {
  const cc = document.getElementById("country").value;
  console.log(cc);
  let getcateg = fetch(`/find/categ/${cc}`);
  getcateg.then(async (res) => {
    const categs = await res.json();
    console.log(categs);
  });
}
findCateg();
