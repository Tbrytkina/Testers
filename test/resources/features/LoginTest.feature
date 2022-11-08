Feature: User login

    @English
    #User test@test.com / Pass1234
    Scenario: User login page verification
        Given User is on Login page
        When User enters <email> and <password>
        Then login <message> appears 
        Examples:
            | email         | password | message
            | test@test.com | Pass1234 | Login succesful
            | test@test.com |          | Password is missing
            |               | Pass1234 | Username or emal is missing
            | test@test.com | Pass1235 | Username or password are incorrect
            