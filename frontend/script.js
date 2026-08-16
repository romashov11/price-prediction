function get_params(){
    const btn = document.getElementById("count_result")
/*    document.addEventListener('keydown', function(event) {
        // Ваш код здесь
        console.log('Нажата клавиша:', event.key);
        });
*/
    const err = document.getElementById('er')
    err.classList.add("hid")

    btn.addEventListener('click', () => {
        
        const city = document.getElementById('city').value
        const metres = document.getElementById('metres').value
        const rooms = document.getElementById('rooms').value
        const floors = document.getElementById('floors').value
        const metro = document.getElementById('metres_underground').value
        

        if (metres <= 0 || floors <= 0 || metro <= 0) {
            err.classList.add("unhid")
            document.getElementById('metres').value = 0
            document.getElementById('floors').value = 0
            document.getElementById('metres_underground').value = 0
            
            

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
        }

        
    })
    
}

get_params();
