import Card from "../components/Card"

export default function TaskB(){
    return <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col h-screen w-[900px] p-4 gap-2">  
        
        {/*The div where title-type text is*/}
        <div className="flex flex-col w-full h-[80px] justify-center">
          <h4 className="text-lg font-bold font-serif text-gray-700">Your SkillShikshya Journey🚀</h4>
          <h2 className="text-2xl font-bold text-gray-900">
           <span className="text-[#2f9877]">Step</span> In.{' '}
           <span className="text-[#2f9877]">Skill</span> Up.{' '}
           <span className="text-[#2f9877]">Stand</span> Out.
          </h2>
        </div>


        <div className="flex-1 flex flex-col p-1 gap-3">
          
          {/*The div where above two cards are*/}
          <div className="flex w-full h-[50%] gap-4"> 
             <Card image="/TL.png" colorCode="#f45c5b" title="Start with Clarity" subtitle="Step into better learning path"
             textA ="Overwhelmed by too many learning" textB="options? ShikShyalaya provides a clear"
             textC="curated roadmap from the start. Whether" textD="You are beginner or Upscaling. We have a" 
             textE="path tailored to your growth" position="-left-[60px] -top-[4px]" textposition="right-4" rol="text-right" />
            

            <Card image="/TR.png" colorCode="#55929f" title="Learn by Doing" subtitle="Practical Skills, Real Projects"
             textA ="Theory is great but Action is Better. At" textB="Shikshyalaya, you will learn by doing. Hands-on"
             textC="Project and Real-World scnario helps you" textD="build, break and create - leading to the true" 
             textE="mastery" position="right-[-40px] top-[-10px]" textposition="left-4" rol="text-left" />
          </div>

          {/*The div where below two cards are*/}  
          <div className="flex border w-full h-[50%] gap-4">
            <Card image="/TLB.png" colorCode="#6d64a9" title="Get Mentored & Support" subtitle="You are not alone."
             textA ="Stuck or need Feedback? Shikshyalaya's" textB="Community of learners and mentors"
             textC="has your back with live support," textD="interctive discussion and expert" 
             textE="insight. You are never on your own." position="-left-[90px] -bottom-[40px]" textposition="right-4" rol="text-right" />
            

            <Card image='/BR.png' colorCode="#a88964" title="Achieve & Showcase" subtitle="Build your portfolio, get job-ready."
             textA ="Your journey ends with achievement. Each" textB="completed project builds a portfolio"
             textC="Showcasing your skills and job readiness" textD="bringing you closer to the dream job," 
             textE="promotion or your own venture" position="right-[-61px] top-[-10px]" textposition="left-4" rol="text-left" />
          </div>

        </div>
      </div> 
    </div>
}