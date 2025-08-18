import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProjects } from "../utils/projectApi";
import { CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        //useEffect不能直接写async，要在内部创建异步函数被调用

        const loadProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (error) {
                console.error("failed to fetch projects");
            } finally {
                setIsLoading(false);
            }
        };
        loadProjects();
    }, []);

    console.log("projects", projects);

    //条件渲染

    if (isLoading) {
        return (
            <div className="center-loader">
                <CircularProgress />
                {/* 这是loading转圈圈的组件 */}
            </div>
        );
    }

    //错误信息
    if (errorMessage) {
        return <Typography variant="h6" color="error"> {errorMessage} </Typography>;
    }

    return (
        <div>
            {projects.length > 0}?{/* //如果有内容，则显示 */}
            <div>
                {projects.map((project) => {
                    return (
                        <div key={project.id} style={{ marginBottom: "16px" }}>
                            <ProjectCard project={project} />
                        </div>
                    );
                })}
            </div>
            :{/* 如果没有内容则显示 */}
            <Typography variant="h6">There's no projects yet.</Typography>
        </div>
    );

    return <></>;
};

export default Projects;
