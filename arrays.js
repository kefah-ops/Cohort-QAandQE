const circleArea = (radius) => {
    return `The area of a circle is: ${Math.PI * radius**2}`;
}
//You're building a data analysis dashboard for a social media platform.
// The API provides an array of user objects, each containing properties like 
// id, name, location, friends (an array of friend IDs), and posts
//  (an array of post objects with content, timestamp, and likes count).


1.	//Filter Active Users: Identify users who have posted at least once in the past week (based on timestamp).
2.	//Extract Popular Posts: From the active users' posts, filter out those with less than 10 likes.
3.	//Calculate Average Likes per User: Reduce the remaining popular posts to a single value representing the average number of likes per active user across all their popular posts.


function analyzeData(users) {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); 
    
    const result = users
     
      .filter(user => user.posts.some(post => new Date(post.timestamp) > oneWeekAgo))
      console.log()
      
     
      .map(user => ({
        ...user,
        popularPosts: user.posts.filter(post => post.likesCount >= 10)
      }))
      
     
      .reduce((acc, user) => {
        const totalLikes = user.popularPosts.reduce((sum, post) => sum + post.likesCount, 0);
        const totalPosts = user.popularPosts.length;
        if (totalPosts > 0) {
          acc.likes += totalLikes;
          acc.posts += totalPosts;
        }
        return acc;
      }, { likes: 0, posts: 0 });
  
    
    return result.posts > 0 ? result.likes / result.posts : 0;
  }
  
  
  const users = [
    {
      id: "1",
      name: "Alice",
      location: "Nyeri",
      friends: ["2", "3"],
      posts: [
        { content: "Hello world!", timestamp: "2025-02-10", likesCount: 20 },
        { content: "Good morning", timestamp: "2025-02-12", likesCount: 5 }
      ]
    },
    {
      id: "2",
      name: "Bob",
      location: "Nairobi kencom",
      friends: ["1"],
      posts: [
        { content: "Nice day today", timestamp: "2025-02-15", likesCount: 30 },
        { content: "Feeling great", timestamp: "2025-02-14", likesCount: 8 }
      ]
    },
    {
      id: "3",
      name: "Charlie",
      location: "KImathi",
      friends: ["1", "2"],
      posts: [
        { content: "This is my post", timestamp: "2025-02-01", likesCount: 7 },
        { content: "Had a great time", timestamp: "2025-02-07", likesCount: 15 }
      ]
    }
  ];
  
  console.log(analyzeData(users)); 
  


const availableFoods = [
    { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 },
    { id: "qwe2356dxh", name: "Pizza", image: "🍕🍕", price: 400 },
    { id: "qwe2456yh", name: "Meat", image: "🍖🍖", price: 500 },
    { id: "qwe2785yh", name: "Chicken", image: "🍗🍗", price: 1200 },
];

const filteredPrices = availableFoods.filter(function (filteredFoodObj) {
    return filteredFoodObj.price > 450;
});

console.log(filteredPrices);
/*
[
    { id: 'qwe2456yh', name: 'Meat', image: '🍖🍖', price: 500 },
    { id: 'qwe2785yh', name: 'Chicken', image: '🍗🍗', price: 1200 }
]
*/

function analyzeData(users) {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); 
    
    const analysisResult = users
      
      .filter(user => user.posts.some(post => new Date(post.timestamp) > oneWeekAgo))
      
      
      .map(user => ({
        ...user,
        popularPosts: user.posts.filter(post => post.likes >= 10)
      }))
      
     
      .reduce((acc, user) => {
        const totalLikes = user.popularPosts.reduce((sum, post) => sum + post.likes, 0);
        const totalPosts = user.popularPosts.length;
        
        if (totalPosts > 0) {
          acc.activeUsers += 1;
          acc.totalPopularPosts += totalPosts;
          acc.totalLikes += totalLikes;
        }
        
        return acc;
      }, { activeUsers: 0, totalPopularPosts: 0, totalLikes: 0 });
    
    
    const avgLikesPerUser = analysisResult.activeUsers > 0
      ? analysisResult.totalLikes / analysisResult.activeUsers
      : 0;
    
    return {
      activeUsers: analysisResult.activeUsers,
      totalPopularPosts: analysisResult.totalPopularPosts,
      averageLikesPerUser: avgLikesPerUser
    };
  }
  
  
  const user = [
    {
      id: 1,
      name: "John",
      location: "Nairobi",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in Nyeri!", timestamp: "2024-05-15T08:30:00", likes: 8 },
        { content: "Visited the park today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "Nyeri",
      friends: [1, 3],
      posts: [
        { content: "Bike Riding!", timestamp: "2024-05-12T14:20:00", likes: 12 },
        { content: "Enjoy the good chapatis!", timestamp: "2024-05-14T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Nairobi",
      friends: [1, 2, 4],
      posts: [
        { content: "Bike riding in skate park", timestamp: "2024-05-08T09:45:00", likes: 25 },
        { content: "Exploring karura forest", timestamp: "2024-05-16T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Nanyuki",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
        { content: "Trying out a new mutura club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Nakuru",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the baboon cliff!", timestamp: "2024-05-09T15:15:00", likes: 9 },
        { content: "Exploring the Lake Nakuru National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
      ]
    }
  ];
  
  console.log(analyzeData(user));
  
