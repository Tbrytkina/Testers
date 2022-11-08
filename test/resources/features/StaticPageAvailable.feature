Feature: User navigates to static pages

    @English
    Scenario: User navigates to page <topmenulink>
        Given User is on Home page
        When User clicks topmenu link <topmenulink>
        Then page is opened and url is equal to <url>
        Examples:
            | topmenulink           | url                                       |
            | Firmast               | https://infodekoor-uat.gammatest.net/about.html |
            | Viimased uudised      | https://infodekoor-uat.gammatest.net/news.html  |
            | Kontakt               | https://infodekoor-uat.gammatest.net/contact.html  |
            | Uued lahendused       | https://infodekoor-uat.gammatest.net/solutions.html  |