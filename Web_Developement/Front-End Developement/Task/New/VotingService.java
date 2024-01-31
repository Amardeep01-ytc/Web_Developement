import java.util.ArrayList;
import java.util.List;

public class VotingService {
    private List<Candidate> candidates = new ArrayList<>();

    public VotingService() {
        candidates.add(new Candidate(1, "Candidate 1"));
        candidates.add(new Candidate(2, "Candidate 2"));
        // Add more candidates as needed
    }

    public List<Candidate> getAllCandidates() {
        return candidates;
    }

    public boolean castVote(Vote vote) {
        // Logic to validate and store the vote
        // Return true if the vote is valid and stored successfully
        return true;
    }
}
