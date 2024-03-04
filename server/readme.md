# Python with FastAPI

To run the backend server, we're using a local development server called Uvicorn

Installation is pretty easy -> `pip install "uvicorn[standard]"`

After this, run the command to start the local server `uvicorn [name of the file]:[name of the instance for which you defined FastAPI] --reload (to reload on changes)`

`uvicorn classes:app --reload` would start the server for our python file!

After you have input this command your python local dev server should be up and running.

Make sure that you now test the connection to the API and frontend -> it should work when you type "admin" for both password and username in the example.
