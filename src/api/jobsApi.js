export const jobsCreatedByPromise = email => {
    return fetch(`http://localhost:4000/jobs?email=${email}`)
    .then(res => res.json())
}