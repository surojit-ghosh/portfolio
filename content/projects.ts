export type ProjectType = {
    featured?: boolean;
    title: string;
    description: string;
    github?: string;
    preview?: string;
    image: string;
    techstack: string[];
};

export const projects: ProjectType[] = [
    {
        featured: true,
        title: "Spotify Profile",
        description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        github: "https://github.com",
        preview: "https://github.com",
        image: "",
        techstack: ["NextJS", "MongoDB", "Firebase Auth"]
    }
];