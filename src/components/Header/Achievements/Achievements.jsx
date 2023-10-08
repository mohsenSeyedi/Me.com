import React ,{useState} from 'react'
import Box from './Box'
import "./Achievements.css"

export default function Achievements() {

  const [achievements ,setAchievements] = useState([
    {id:1 , title:"Awards" , number:"100"},
    {id:2 , title:"Complete Projects" , number:"1,200"},
    {id:3 , title:"Happy Customers" , number:"1,200"},
    {id:4 , title:"Cups of coffee" , number:"500"},
  ])

  return (
    <div id="achievements" className="w-full h-auto flex flex-col items-center justify-center relative mt-32">
        <div id="achievements-boxes" className="w-11/12 grid grid-cols-4 gap-12 absolute top-36">
          {achievements.map(achievement => (
            <Box key={achievement.id} {...achievement}/>
          ))}
        </div>
        <div id="container" className="w-full h-[600px] flex items-center justify-center mt-64">
            <div className="w-9/12 flex flex-col items-center justify-center text-center text-3xl mt-32">
                <h3 className="text-7xl font-bold w-4/6 text-center ">I'm <span className="text-yellow-color">Available</span> for freelancing</h3>
                <p className="w-5/6 mt-12">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <a href="#" className="btn text-xl font-bold uppercase py-6 px-20 mt-12">heri me</a>
            </div>
        </div>
    </div>
  )
}
