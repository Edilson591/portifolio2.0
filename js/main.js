function profile(profileData){
    const photo = document.getElementById('photo-profile')
    photo.scr = profileData.photo


    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
}
function profileSkill(profileData){
    const getSkills = document.getElementById('uptade-hard-skill')
    getSkills.innerHTML = profileData.skills.hardSkills.map((skill =>`<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`)).join('')
}
function profileSkillAbility(profileData){
    const getAbility = document.getElementById('uptade-hard-ability')
    getAbility.innerHTML = profileData.skills.softSkills.map((skill) =>`<li>${skill}</li>`).join('')
}
function profileLanguages(profileData){
    const getLanguages = document.getElementById('languages-learned')
    getLanguages.innerHTML = profileData.languages.map((languages) => `<li>${languages}</li>`).join('')
}
function profilePortifolio(profileData){
    const getPortifolio = document.getElementById('get-portifolio')
    getPortifolio.innerHTML = profileData.portfolio.map((portifolio) =>{
        return `<li>
                    <h3 ${portifolio.github ? 'class=github': ''}>${portifolio.name}</h3>
                    <a href="${portifolio.url}" target="_blank">${portifolio.url}</a>
               </li>`
    })
}

function profileExperience(profileData){
    const getExperience = document.getElementById('professional-experience')
    getExperience.innerHTML = profileData.professionalExperience.map((experience) =>{
        return `<li>
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period}</p>
                    <p>${experience.description}</p>
                </li>`
    })

}





( async () =>{
    const profileData = await fechtJson ()
    profile(profileData)
    profileSkill(profileData)
    profileSkillAbility(profileData)
    profileLanguages(profileData)
    profilePortifolio(profileData)
    profileExperience(profileData)
})()