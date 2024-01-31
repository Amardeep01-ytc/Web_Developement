// VotingController.java
@RestController
@RequestMapping("/api/voting")
public class VotingController {

    @Autowired
    private VotingService votingService;

    @GetMapping("/candidates")
    public List<Candidate> getAllCandidates() {
        return votingService.getAllCandidates();
    }

    @PostMapping("/vote")
    public ResponseEntity<String> vote(@RequestBody Vote vote) {
        boolean success = votingService.castVote(vote);
        if (success) {
            return ResponseEntity.ok("Vote cast successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid vote");
        }
    }
}
