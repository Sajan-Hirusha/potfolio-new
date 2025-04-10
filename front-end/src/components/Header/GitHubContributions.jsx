import { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubContributions = () => {
    const [contributions, setContributions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const username = 'Sajan-Hirusha';  // Replace with your GitHub username
    const token = 'your-github-token';  // Replace with your GitHub token if needed

    useEffect(() => {
        const getGitHubContributions = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/events/public`, {
                    headers: {
                        Authorization: `token ${token}` // Optional: For private repos or higher limits
                    }
                });

                // Filter events for the current month
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();

                // Filter contributions from the current month
                const filteredContributions = response.data.filter(event => {
                    const eventDate = new Date(event.created_at);
                    return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
                });

                setContributions(filteredContributions);
                setLoading(false);
            } catch (error) {
                setError('Failed to load contributions.');
                setLoading(false);
            }
        };

        getGitHubContributions();
    }, []);

    if (loading) {
        return <div>Loading GitHub Contributions...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Helper function to get the dot style based on the contribution date
    const getDotStyle = (date) => {
        const eventDate = new Date(date);
        const dayOfMonth = eventDate.getDate();

        // Adjust the size and color of the dot based on the day
        return {
            gridColumn: (dayOfMonth % 7) + 1,  // Place dots in a 7-column grid
            gridRow: Math.floor(dayOfMonth / 7) + 1, // 7 rows for the maximum days in a month
            backgroundColor: '#3b82f6', // Default color for dots
        };
    };

    return (
        <div>
            <h2>Your GitHub Contributions This Month</h2>
            <div className="dot-board">
                {contributions.length > 0 ? (
                    contributions.map((event, index) => {
                        const dotStyle = getDotStyle(event.created_at);
                        return (
                            <div
                                key={index}
                                className="dot"
                                style={dotStyle}
                            />
                        );
                    })
                ) : (
                    <div>No contributions this month.</div>
                )}
            </div>
        </div>
    );
};

export default GitHubContributions;
