import { sendData } from "./api.js";

function get_params(){
    const btn = document.getElementById("count_result")

    const err = document.getElementById('er')
    err.classList.add("hid")

    btn.addEventListener('click', () => {
        
        const city = document.getElementById('city').value
        const metres = document.getElementById('metres').value
        const rooms = document.getElementById('rooms').value
        const floors = document.getElementById('floors').value
        const metro = document.getElementById('metres_underground').value
        const year = document.getElementById('build_year').value
        

        if (metres <= 0 || floors <= 0 || metro <= 0 || year <= 0) {
            
            err.classList.add("unhid")
            document.getElementById('metres').value = ""
            document.getElementById('floors').value = ""
            document.getElementById('metres_underground').value = ""
            document.getElementById('build_year').value = ""
            
            

        }

        else{
            err.classList.remove("unhid")
            const data = {
            city: city,
            metres: parseFloat(metres) || 0,      // Преобразуем в число
            rooms: parseInt(rooms) || 0,           // Преобразуем в целое число
            floors: parseInt(floors) || 1,         // Преобразуем в целое число
            metro: parseFloat(metro) || 0
            
        }

        // sendData(url, data) - отправка данных на сервер
        }

        
    })
    
}




get_params();

