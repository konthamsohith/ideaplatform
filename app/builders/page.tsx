import React from 'react';
import { mockBuilders } from '../data/mock-users';
import { Card, CardHeader, CardBody, CardFooter } from '../components/Card';
import { Button } from '../components/Button';
import './builders.css';

export const metadata = {
    title: "Find Co-founders & Startup Collaborators",
    description: "Browse our directory of elite builders, engineers, and designers. Find your next Y Combinator co-founder and build validated startup solutions together.",
    keywords: ["find co-founders", "startup collaborators", "y combinator teams", "build a startup", "hire developers for equity"],
};

export default function BuildersPage() {
    return (
        <main className="container builders-page">
            <header className="page-header text-center">
                <h1>Builder & Co-founder Directory</h1>
                <p>Find vetted co-founders, collaborators, and technical experts ready to turn validated problem statements into Y Combinator-ready products.</p>
                <div className="header-actions">
                    <Button variant="primary">Join as a Builder</Button>
                </div>
            </header>

            <div className="builders-grid">
                {mockBuilders.map(builder => (
                    <Card key={builder.id} className="builder-card">
                        <CardHeader>
                            <div className="builder-header">
                                <div className="avatar-placeholder">{builder.name.charAt(0)}</div>
                                <div>
                                    <h3>{builder.name}</h3>
                                    <span className="role-badge">{builder.role}</span>
                                    {builder.availableForTeams && <span className="availability-badge">Looking for Team</span>}
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p className="bio">{builder.bio}</p>
                            <div className="skills-container">
                                {builder.skills.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="stats">
                                <span>🚀 {builder.projectsContributed} Projects</span>
                            </div>
                            <Button variant="outline" size="sm">Invite to Collaborate</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
