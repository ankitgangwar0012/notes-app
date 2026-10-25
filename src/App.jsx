import { NotebookPen } from 'lucide-react';
import { useState } from 'react';

const App = () => {
  

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Title : ",title,"\nDetail : ",details);

    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(copyTask);
    setTitle('')
    setDetails('')  
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)       // arr.splice(start, no. of elements to delete from start, Ele1,ele2,...)
    setTask(copyTask) 
  }

  return (
    <div className="bg-black h-screen text-white sm:flex ">
      <div className="p-5 h-83 sm:min-w-75 sm:w-1/3 sm:h-full">
        <h2 className="text-2xl font-semibold mb-4">Create Note</h2>

        {/* Form */}

        <form  onSubmit={(e)=>{
          submitHandler(e)}}
        className="flex flex-col gap-5">
            <input 
            type="text" 
            placeholder="Enter Note Heading"
            className="border-2 border-white outline-none px-5 py-2 rounded-[5px]"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            />
            <textarea 
            name="" 
            id="" 
            placeholder="Write Details" 
            className="h-30 sm:h-100 border-2 border-white outline-none px-5 py-2 rounded-[5px] resize-none"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
            ></textarea>
            <button className="bg-white active:bg-gray-300 text-black rounded-[5px] p-2 font-semibold cursor-pointer">Add Note</button>
        </form>
      </div>
      <div className="p-5 h-[calc(100vh-332px)] sm:h-full sm:border-l-2">
        <h2 className="text-2xl font-semibold mb-4">My Notes</h2>
        <div className="flex gap-4 flex-wrap content-start  h-[calc(100%-52px)] sm:h-[calc(100%-58px)] overflow-auto">
          
            {
              task.map((elem,idx)=>{
                return (<div key={idx} 
                className="bg-white text-black p-4 rounded-[5px] w-full h-28 sm:w-50 sm:h-60 flex flex-col justify-between">
                  <div>
            <div className='flex justify-between border-b-2 border-black pb-1.5 mb-1.5'>
            <h3 className='text-[18px] font-semibold leading-tight'>{elem.title}</h3>
            <NotebookPen size={22} />  
            </div>
            <p>{elem.details}</p>
          </div>
          <button 
          className='bg-red-500 px-3.5 py-0.5 rounded active:bg-red-400 self-end sm:self-auto font-semibold'
          onClick={()=>{
            deleteNote(idx)
          }}
          >Delete</button>
          </div>)
              })
            }

        </div>

      </div>
      
    </div>
  )
}

export default App