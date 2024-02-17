interface ProjectsProps {
    children: React.ReactNode
}

const ProjectPageLayout = ({ children }: ProjectsProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProjectPageLayout