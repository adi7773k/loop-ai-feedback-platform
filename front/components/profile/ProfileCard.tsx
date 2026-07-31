"use client";

import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { userProfile } from "@/data/profileData";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col items-center">

        <img
          src="https://i.pravatar.cc/200"
          alt="Profile"
          className="h-32 w-32 rounded-full border-4 border-indigo-100"
        />

        <h2 className="mt-5 text-2xl font-bold">
          {userProfile.name}
        </h2>

        <p className="text-indigo-600">
          {userProfile.role}
        </p>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3">
          <Mail size={18}/>
          {userProfile.email}
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18}/>
          {userProfile.phone}
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={18}/>
          {userProfile.location}
        </div>

        <div className="flex items-center gap-3">
          <Calendar size={18}/>
          Joined {userProfile.joined}
        </div>

      </div>

    </div>
  );
}