function get_params(){
    const btn = document.getElementById("count_result")
    btn.addEventListener('click', () => {
        
        const city = document.getElementById('city').value
        const metres = document.getElementById('metres').value
        const rooms = document.getElementById('rooms').value
        const floors = document.getElementById('floors').value
        const metro = document.getElementById('metres_underground').value

        const data = {
        city: city,
        metres: parseFloat(metres) || 0,      // Преобразуем в число
        rooms: parseInt(rooms) || 0,           // Преобразуем в целое число
        floors: parseInt(floors) || 1,         // Преобразуем в целое число
        metro: parseFloat(metro) || 0
    }

    
        alert(data.rooms)

        console.log(data)
    })
    
}

get_params();
