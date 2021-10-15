const categoriesPizzas = document.getElementById('pizzas')
let categories = ['MUZZA', 'SIMPLES', 'GOURMET', 'SUPER GUSTOS']
categories.forEach(categoria => {
    categoriesPizzas.innerHTML += `<button>${categoria}</button>`
})

const categoriesM = document.getElementById('pizzasM')
categories.forEach(categoria => {
    categoriesM.innerHTML += `<button>${categoria}</button>`
})

const categoriesCh = document.getElementById('pizzasCh')
categories.forEach(categoria => {
    categoriesCh.innerHTML += `<button>${categoria}</button>`
})

const categoriesEmpanadas = document.getElementById('empanadas')
let categoria = ['CARNE CEB. Y MORRON', 'JAMON Y QUESO', 'QUESO Y ACEITUNAS', 'QUESO Y CEBOLLA', 'CAPRESSE', 'VERDURA']
categoria.forEach(categoria => {
    categoriesEmpanadas.innerHTML += `<button>${categoria}</button>`
})

const categoriesPapas = document.getElementById('fritas')
let categoryPapas = ['GRANDES', 'PEQUEÑAS', 'CHEDDAR', 'GRAMAJO']
categoryPapas.forEach(categoria => {
    categoriesPapas.innerHTML += `<button>${categoria}</button>`
})

const categoriesSandw = document.getElementById('sandwiches')
let categorySandw = ['COMUN', 'MUZZA', 'NAPO', 'ESPECIAL']
categorySandw.forEach(categoria => {
    categoriesSandw.innerHTML += `<button>${categoria}</button>`
})
const categoriesBebidas = document.getElementById('bebidas')
let categoryBebidas = ['COCA COLA', 'LATA', 'LITRO', 'STELLA', 'HEINEKEN']
categoryBebidas.forEach(categoria => {
    categoriesBebidas.innerHTML += `<button>${categoria}</button>`
})

const categoriesExtras = document.getElementById('extras')
let categoryExtras = ['ALIOLI', 'GUSTO EXTRA', 'MAS']
categoryExtras.forEach(categoria => {
    categoriesExtras.innerHTML += `<button>${categoria}</button>`
})