"use client"
import * as React from 'react';

export default function Signup() {
  return (
    <div>
      <h1 className='text-3xl bg-green-500'>Sign up</h1>
      <div>
        <form action="">
          <input
            type="name"
            placeholder='Enter your name....'
          />
          <input type="email"
            placeholder='Enter your email....'
            className='ml-5'
          />
        </form>
      </div>
    </div>
  )
}

