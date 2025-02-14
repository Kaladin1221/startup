import React from 'react';

export function Login() {
    return (
        <main className="container-fluid bg-dark text-center text-white">
        <div>
          <h1>KOTOBA</h1>
          <form method="get" action="play.html">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input className="form-control" type="password" placeholder="password" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <button type="submit" class="btn btn-secondary">Create</button>
          </form>
        </div>
      </main>
    )
}