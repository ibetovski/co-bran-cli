import { encodeSentence } from './dependencies.js';

let input;

if (Deno.args.length > 0) {
  input = Deno.args.join(' ');
}

// taken from https://stackoverflow.com/questions/58019572/getting-values-from-deno-stdin
window.onload = async function main() {
  const buf = new Uint8Array(1024);
  /* Reading into `buf` from start.
   * buf.subarray(0, n) is the read result.
   * If n is instead Deno.EOF, then it means that stdin is closed.
   */
  const n = await Deno.stdin.read(buf); 
  if (n == Deno.EOF) {
    console.log("Standard input closed")
  } else {
    input = new TextDecoder().decode(buf.subarray(0, n));
    console.log(encodeSentence(input));
  }
}

// if (!input) {
//   throw new Error('Please provide an input in bulgarian language.');
// }

console.log(encodeSentence(input));