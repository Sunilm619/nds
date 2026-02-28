function valid_pal(s) {
  let fwd_charecers = "";
  let bwd_charecers = "";
  s = s.toLowerCase().match(/\w/g);
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    fwd_charecers = fwd_charecers + s[i];
    bwd_charecers = s[i] + bwd_charecers;
  }
  console.log(bwd_charecers === fwd_charecers);
}

let s = "A man, a plan, a canal: Panama";
valid_pal(s);
