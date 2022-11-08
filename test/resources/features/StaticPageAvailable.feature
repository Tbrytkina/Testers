Feature: User navigates to static pages

    @English
    Scenario: User navigates to page Firmast
        Given User is on Home page
        When User clicks topmenu link <topmenulink>
        Then page is opened and url is equal to <url>
        Examples:
            | topmenulink           | url                                       |
            | Firmast               | https://infodekoor-uat.gammatest.net/about.html |
            | Viimased uudised      | https://infodekoor-uat.gammatest.net/news.html  |