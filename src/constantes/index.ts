
export interface meunType{
    lien:string,
    nom:string,
}

export const navList:meunType[]=[
    {
        lien:"/",
        nom:'Home'
    },
    {
        lien:'/about',
        nom:'About Us'
    },
    {
        lien: '/service',
        nom: 'Srevice'
    },
    {
        lien:'/portfolio',
        nom: 'Portfolio'
    },
    {
       lien:'/team',
        nom: 'Team'  
    },
    {
         lien:'/pricing',
        nom: 'Pricing'
    },
    {
         lien:'/contact',
        nom: 'Contact'
    },
    
]