import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nuareafrukmnjnaakplk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsd3ZiY2dpcWt0ZWVkcnNpamZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3OTU2OTIsImV4cCI6MjA0ODM3MTY5Mn0.ujVg1YlU9WgvnJB2j7Z0VQo9dzfqdRSWx7irS6JkN6Q",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsd3ZiY2dpcWt0ZWVkcnNpamZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3OTU2OTIsImV4cCI6MjA0ODM3MTY5Mn0.ujVg1YlU9WgvnJB2j7Z0VQo9dzfqdRSWx7irS6JkN6Q"
    }
})