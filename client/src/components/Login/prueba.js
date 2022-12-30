let token = "_ga=GA1.1.734634428.1671111543; _ga_QTFY8K5KVB=GS1.1.1671123901.2.0.1671123901.0.0.0; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyZ3MyMDA4QGdtYWlsLmNvbSIsImlhdCI6MTY3MjA2NTY4MywiZXhwIjoxNjcyMDY1NzQzfQ.HkF9QduPpLyWKPBDaXE5jJ0AvgRYgZSzHwJ7vln3nbw"

let pos = token.lastIndexOf("token")
console.log(pos);
let a = token.slice(86)
let b = token.slice(92)

console.log(a);
console.log(b);