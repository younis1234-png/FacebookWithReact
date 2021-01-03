import React from 'react'
import "./StoryReel.css"
import Story from "./Story/Story"

function StoryReel ()
{
    const img =
        'https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
    const img1 =
        'https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80';
    const img2 =
        'https://images.unsplash.com/photo-1493690314206-255f1df89427?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80';
    const img3 =
        'https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
    const img4 =
        'https://images.unsplash.com/photo-1489614389547-f2209ef4b321?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=358&q=80';
    

    return (
        <div className="storyRow">
            <div className="storyReel">
      <Story
        image={img}
        profileSrc="https://images.unsplash.com/photo-1515943492249-2d5d5d944085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        title="Younis Saleh"
      />
      <Story
        image={img1}
        profileSrc="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        title="Jess Smith"
      />
      <Story
        image={img2}
        profileSrc="https://images.unsplash.com/photo-1492681591534-d1f062f4c5c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=325&q=80"
        title="David Brown"
      />
      <Story
        image={img3}
        profileSrc="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
        title="Benjamin Ben"
      />
      <Story
        image={img4}
        profileSrc="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="Sunny TheKid"
      />
    </div>
        </div>
    )
}

export default StoryReel
