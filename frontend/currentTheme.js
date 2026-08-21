export function currentTheme() {
    // 1. Проверяем сохранённую настройку в localStorage
    

    const btn = document.getElementById("change_theme");

    
    

    
    
    btn.addEventListener("click", () => {
        const savedTheme = localStorage.getItem("theme")
        

        if (savedTheme === "light") {
            localStorage.theme = "dark"
            document.body.style.color = "black"

        }

        else{
            localStorage.theme = "light"
            document.body.style.color = "white"

        }
    });
    

    

    // 2. Если сохранённой нет — проверяем системные предпочтения
    // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Пример использования:
//const theme = currentTheme();
//document.body.classList.add(theme); // Применяем класс 'dark' или 'light' к body