const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const title = document.querySelector('.post h1')
const text = document.querySelector('.post p')

const API_URL = 'https://jsonplaceholder.typicode.com'

const getPostdetails = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`)
     const data = await response.json()
     return data
}

prevBtn.addEventListener('click', async () => {
    if (postNum > 1) {
        postNum++
        switchToPost()
    }

})
nextBtn.addEventListener('click', () => {
    postNum++
    switchToPost()
})
async function switchToPost() {
    try {
        const postText = await getPostdetails(postNum)
        title.textContent = postText.title
        text.textContent = postText.body
    } catch (error) {
        console.error('Post Load Failed', error)
        title.textContent = 'Error'
        text.textContent = 'Failed'
    }
}

let postNum = 1 
loadPost()
