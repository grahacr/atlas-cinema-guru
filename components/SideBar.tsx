"use client";
import { useState, useEffect } from "react";
import { FolderClosed, Star, Clock } from "lucide-react"

type Activity = {
    id: number,
    timestamp: string,
    activity: string,
    title: string,
};

type SideBarProps = {
    email: string | null;
};

export default function SideBar({ email }: SideBarProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [activityFeed, setActivityFeed] = useState<Activity[]>([]);

    useEffect(() => {
        if (!isHovered || !email) return;

        const fetchData = async () => {
            const response = await fetch(`/api/activities?page=1`);
            const data = await response.json();
            const formattedActivities = data.activities.map((activity: Activity) => ({
                ...activity,
                timestamp: new Date(activity.timestamp),
            }));
            setActivityFeed(formattedActivities);
        };
        fetchData();
    }, [isHovered, email]);

    return (
        <div className={`w-20 bg-teal-400 p-4 transition-all duration-300 ${
            isHovered ? 'w-64' : ''
        }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <FolderClosed fill="white"/>
                    <p className={`text-white transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}>Home</p>
                </div>
                <div className="flex items-center gap-3">
                    <Star fill="white" />
                    <p className={`text-white transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}>Favorites</p>
                </div>
                <div className="flex items-center gap-3">
                    <Clock fill="white" />
                    <p className={`text-white transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}>Watch Later</p>
                </div>
            </div>
            {isHovered && (
                <div className="activity-feed mt-6 transition-opacity duration-300 opacity-100">
                    <h3 className="text-blue-950 text-xl">Latest Activities</h3>
                    <ul className="text-blue-950">
                        {activityFeed.map((activity) => (
                            <li key={activity.id} className="my-2">
                                <div>{activity.timestamp.toLocaleString()}</div>
                                <div>{activity.activity}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}


