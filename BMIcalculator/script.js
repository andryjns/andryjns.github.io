var body = document.body

function hitungBMI() {
    var berat= document.getElementById("berat").value
    var tinggi= document.getElementById("tinggi").value
    
    var hasil= (berat/(Math.pow(tinggi/100,2))).toFixed(1)

    if (berat==='' || tinggi==='') {
        alert('Data tidak lengkap !')
    } else
    
    if (hasil <18.5) {
        alert ('BMI anda: ' + hasil + ' => Berat badan kurang')
    } else

    if (hasil >=18.5 && hasil < 23) {
        alert ('BMI anda: ' + hasil + ' => Berat badan normal')
    } else
    
    if (hasil >=23 && hasil < 30) {
        alert ('BMI anda: ' + hasil + ' => Berat badan berlebih')
    } else

    if (hasil >= 30) {
        alert('BMI anda: ' + hasil + ' => Obesitas')
    } 

     
}