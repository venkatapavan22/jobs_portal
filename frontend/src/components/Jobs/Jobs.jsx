import React, { useEffect, useState } from 'react'
import { getJobs } from '../../services/api';

const Jobs = () => {
    const [jobs,setJobs] = useState();

    const fetchJobs = async() => {
        try {
            const res = await getJobs();
            setJobs(res.getallJobs)
        } catch (error) {
            console.log("Error while getting api jobs")
        }
    }

    useEffect(() => {
        fetchJobs()
    },[])
  return (
    <div>
      <h1>Explore Jobs</h1>
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 px-6 py-2 min-h-[50vh]">
      {jobs && jobs.length > 0 ? (
        jobs.map(job => (
            <div key={job._id}>
                <h1>{job.jobtitle}</h1>
                <p>{job.company}</p>
                <p>{job.skills}</p>
                <p>{job.location}</p>
                <p>{job.salary}</p>
                <p>{job.experience}</p>
                <p>{job.description}</p>
            </div>
        ))
      ):(
        <div>
            <p>No jobs found</p>
        </div>
      )}
      </section>
    </div>
  )
}

export default Jobs
