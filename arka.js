fetch('https://jsonplaceholder.typicode.com/posts')
    // response = var jawaban dari fetch
    .then(response => response.json())
    //parse response beda bentuk
    .then(result => {
        result.map((item, index) => {
            settoDOM(item, index);
        })
    })

function settoDOM(item, index) {
    document.getElementById(`curri-${index + 1}`).innerHTML = item.title;
    document.getElementById(`desc-${index + 1}`).innerHTML = item.body;
    document.getElementById(`h1-${index + 1}`).innerHTML = item.id;
}

// var h1num = [
//     {
//         num: "1-2",
//         curri: "Algoritma, Flowchart dan Dasar JavaScript",
//         desc: "Pada dua minggu pertama, kalian akan mempelajari dasar programming seperti Algoritma dan Flowchart, lalu dilanjutkan dengan materi JavaScript, seperti ES6, Asynchronous JavaScript dan lain-lain."
//     },
//     {
//         num: "3",
//         curri: "Responsive Website",
//         desc: "Kalian akan mempelajari bagaimana membangun website yang responsive dengan HTML, CSS, dan Bootstrap"
//     },
//     {
//         num: "4",
//         curri:"Beginner Backend with Node.js & Express.js",
//         desc: "Selanjutnya, kalian akan membangun sebuah RESTful HTTP API dengan menggunakan Node.js dan Express.js, serta menggunakan database MySQL"
//     },
//     {
//         num: "5",
//         curri: "Beginner Frontend with React",
//         desc: "Minggu ini kalian akan mempelajari Fundamental React.js, untuk membangun aplikasi web Frontend modern"
//     },
//     {
//         num: "6",
//         curri: "Intermediate Backend",
//         desc: "Kalian akan belajar membuat autentikasi dengan JWT, melakukan paginasi dan upload file berbasis RESTful HTTP API"
//     },
//     {
//         num: "7",
//         curri: "Intermediate Frontend",
//         desc: "Minggu ini kalian akan mempelajari State Management Frontend dengan Redux"
//     },
//     {
//         num: "8",
//         curri: "Team Project1",
//         desc: "Kalian akan bekerja dalam tim dan membangun produk website dengan menerapkan framework SCRUM"
//     },
//     {
//         num: "9",
//         curri: "Beginner Mobile Development with React Native",
//         desc: " Selanjutnya, kalian akan masuk ke development mobile dengan React Native yang dapat dibuild menjadi aplikasi Android dan iOS"
//     },
//     {
//         num: "10",
//         curri: "Intermediate Mobile Developmentt",
//         desc: "Kalian akan lebih dalam mempelajari React Native dan menerapkan Push Notification"
//     },
//     {
//         num: "11",
//         desc: " Kalian akan membangun aplikasi mobile berisi fitur Chat dan Map yang Realtime dengan memanfaatkan Socket.io",
//         curri: "Real Time Application"
//     },
//     {
//         num: "12",
//         curri: "Team Project 2 (Final Project)",
//         desc:  "Kalian akan bekerja dalam tim, diberi tantangan untuk membuat aplikasi baru dengan ide bisnis di dalamnya, dan juga dengan menerapkan semua yang telah dipelajari"
//     }];

// for (i = 1; i <= h1num.length; i++) {
//     let h1 = "h1-" + i;
//     document.getElementById(h1).innerHTML = h1num[i - 1].num;

//     let curri = "curri-" + i;
//     document.getElementById(curri).innerHTML = h1num[i - 1].curri;

//     let desc = "desc-" + i;
//     document.getElementById(desc).innerHTML = h1num[i - 1].desc;
// };

