/*
End Result:

arrayDiff([1,2], [2]) == [2]; // deletes every instance of the second input element

*/

function arrayDiff(a, b) {
    for(i = 0; a.length > i ;i++) {        
      if(a[i] == b){
          a.splice(i,1);
      }
  }
  return a;
}

arrayDiff([1,2],[1]) //== [2]

/*
Test Results:
 Basic tests
 Should pass Basic tests
Test Passed: Value deep equals [2]
Test Passed: Value deep equals [2, 2]
a was [1,2,2], b was [2] - Expected: [1], instead got: [1, 2]
Test Passed: Value deep equals [1, 2, 2]
Test Passed: Value deep equals []
Completed in 3ms
Completed in 5ms
 Random tests
 Testing for arrayDiff([2,16,-1,18,-14,-2,16,-7,11,16,3,10],[-7,16])
Should work for random arrays too - Expected: [2, -1, 18, -14, -2, 11, 3, 10], instead got: [2, 16, -1, 18, -14, -2, 16, -7, 11, 16, 3, 10]
Completed in 1ms
 Testing for arrayDiff([-12,-12,-13,11,-2,-6,-1,12,-12,16],[-2,12,-13,-12])
Should work for random arrays too - Expected: [11, -6, -1, 16], instead got: [-12, -12, -13, 11, -2, -6, -1, 12, -12, 16]
 Testing for arrayDiff([0,-13,-5,19,-3,1,7,-11,-10,2,-5,4,18,9,18,-1,19,-20,2],[4,19,18,-20,2,-3,19,2,9,1,-13,-10,-5,-11,18,-5,7])
Should work for random arrays too - Expected: [0, -1], instead got: [0, -13, -5, 19, -3, 1, 7, -11, -10, 2, -5, 4, 18, 9, 18, -1, 19, -20, 2]
 Testing for arrayDiff([20,-6,-16,20,-14,12,-16,0,-13,-16,17,0,-18,3,-1,17,8,13,0,6],[17,-14,0])
Should work for random arrays too - Expected: [20, -6, -16, 20, 12, -16, -13, -16, -18, 3, -1, 8, 13, 6], instead got: [20, -6, -16, 20, -14, 12, -16, 0, -13, -16, 17, 0, -18, 3, -1, 17, 8, 13, 0, 6]
Completed in 1ms
 Testing for arrayDiff([3,13,1,-9],[1,-9])
Should work for random arrays too - Expected: [3, 13], instead got: [3, 13, 1, -9]
 Testing for arrayDiff([-8,-14,12,16,15,7,7,15,-1,-7,-1,16,12],[7,12,-7])
Should work for random arrays too - Expected: [-8, -14, 16, 15, 15, -1, -1, 16], instead got: [-8, -14, 12, 16, 15, 7, 7, 15, -1, -7, -1, 16, 12]
 Testing for arrayDiff([18,-13,12,-9,9,18],[-9,18,9,12,-13])
Should work for random arrays too - Expected: [], instead got: [18, -13, 12, -9, 9, 18]
Completed in 1ms
 Testing for arrayDiff([7,4,-10],[])
 Testing for arrayDiff([],[])
 Testing for arrayDiff([17],[17])
 Testing for arrayDiff([4,7,15,-12,-4,-14],[15,-12,-4])
Should work for random arrays too - Expected: [4, 7, -14], instead got: [4, 7, 15, -12, -4, -14]
 Testing for arrayDiff([19,20,-3,8,0,20,-15,9,19],[20,8])
Should work for random arrays too - Expected: [19, -3, 0, -15, 9, 19], instead got: [19, 20, -3, 8, 0, 20, -15, 9, 19]
 Testing for arrayDiff([0,7,-2,17,0,7,17,-11,8,15,-6,-14],[17,-6,7,17,-14,7,8,-2,-11])
Should work for random arrays too - Expected: [0, 0, 15], instead got: [0, 7, -2, 17, 0, 7, 17, -11, 8, 15, -6, -14]
Completed in 1ms
 Testing for arrayDiff([15,17,0,-3,17,5,8,-20,9,-7,-1],[-1,15,-7])
Should work for random arrays too - Expected: [17, 0, -3, 17, 5, 8, -20, 9], instead got: [15, 17, 0, -3, 17, 5, 8, -20, 9, -7, -1]
 Testing for arrayDiff([4,-1,-11,15,-5,2,11,7,11,-14,-16,-15,0,-4,-6,0,7],[15,11,0,-5,-16,-11,11,-15,7,-6])
Should work for random arrays too - Expected: [4, -1, 2, -14, -4], instead got: [4, -1, -11, 15, -5, 2, 11, 7, 11, -14, -16, -15, 0, -4, -6, 0, 7]
 Testing for arrayDiff([9,-7,9,-4,11,-1,-19,-18,-16,9,3,17,-2,18,1,-3,14],[3,-7,-1,-19,11,-4,9,-18,18,17,1])
Should work for random arrays too - Expected: [-16, -2, -3, 14], instead got: [9, -7, 9, -4, 11, -1, -19, -18, -16, 9, 3, 17, -2, 18, 1, -3, 14]
Completed in 1ms
 Testing for arrayDiff([-4,-10,0,14,5,-10,0,-17,-15,-13,-15,6,15,-18,2,-20,-5,4,-10,17],[-15,-20,-13,-4,-10,-10,0,6])
Should work for random arrays too - Expected: [14, 5, -17, 15, -18, 2, -5, 4, 17], instead got: [-4, -10, 0, 14, 5, -10, 0, -17, -15, -13, -15, 6, 15, -18, 2, -20, -5, 4, -10, 17]
 Testing for arrayDiff([-12,-3,8,6,2,10,-18,12,9,15],[8,6,12,-3,15,-12])
Should work for random arrays too - Expected: [2, 10, -18, 9], instead got: [-12, -3, 8, 6, 2, 10, -18, 12, 9, 15]
 Testing for arrayDiff([10,10,11],[10,11])
Should work for random arrays too - Expected: [], instead got: [10, 10, 11]
Completed in 1ms
 Testing for arrayDiff([19],[19])
 Testing for arrayDiff([14,-8,-11,-3,19,18,-20,9,17,10,16,-5,19,19,18,18,-2,9,16,12],[18,-20,14,-2,17,9,19,18,19,12,10,16,-3,19,16,9,-8,-5,-11,18])
Should work for random arrays too - Expected: [], instead got: [14, -8, -11, -3, 19, 18, -20, 9, 17, 10, 16, -5, 19, 19, 18, 18, -2, 9, 16, 12]
 Testing for arrayDiff([-2,-2,-20,2],[-2,-20])
Should work for random arrays too - Expected: [2], instead got: [-2, -2, -20, 2]
 Testing for arrayDiff([0,-7,-19,8,-17,-18,-8,-14,-4,-10,12,-15,4],[-10,-19,-7,0,4,-17,12,-8,-15])
Should work for random arrays too - Expected: [8, -18, -14, -4], instead got: [0, -7, -19, 8, -17, -18, -8, -14, -4, -10, 12, -15, 4]
Completed in 1ms
 Testing for arrayDiff([-6,11,14],[11])
 Testing for arrayDiff([5,12,10,0,-3,-8,-12,-18,-3,-6,5],[-8,10,5,5])
Should work for random arrays too - Expected: [12, 0, -3, -12, -18, -3, -6], instead got: [5, 12, 10, 0, -3, -8, -12, -18, -3, -6, 5]
 Testing for arrayDiff([-11,-5,11,-16],[11,-16,-11,-5])
Should work for random arrays too - Expected: [], instead got: [-11, -5, 11, -16]
 Testing for arrayDiff([-9,-19,9,-19,-19,-17,17,-13,-15],[-19])
Should work for random arrays too - Expected: [-9, 9, -17, 17, -13, -15], instead got: [-9, 9, -19, -17, 17, -13, -15]
 Testing for arrayDiff([],[])
 Testing for arrayDiff([],[])
 Testing for arrayDiff([-16,-19,-13,-13,4,-13,-19,-8,11,-18],[-19,-13,-13])
Should work for random arrays too - Expected: [-16, 4, -8, 11, -18], instead got: [-16, -19, -13, -13, 4, -13, -19, -8, 11, -18]
 Testing for arrayDiff([-5,1,6,-4,-7,8,-7,9,1,-20,-17,5],[-17,-7,-20,6,8,-7,-5,5,9])
Should work for random arrays too - Expected: [1, -4, 1], instead got: [-5, 1, 6, -4, -7, 8, -7, 9, 1, -20, -17, 5]
 Testing for arrayDiff([12,-12,-2,-6,8,-4,-10,20,2,-10],[])
 Testing for arrayDiff([-10,18],[-10,18])
Should work for random arrays too - Expected: [], instead got: [-10, 18]
 Testing for arrayDiff([10,-6,19,-7,6,-10],[-7,6,-10,10])
Should work for random arrays too - Expected: [-6, 19], instead got: [10, -6, 19, -7, 6, -10]
 Testing for arrayDiff([14,9,16,-4,-18,8,-15,-17,20,-16,3,-6,8,-18,11,4,-10],[14,-15,-18])
Should work for random arrays too - Expected: [9, 16, -4, 8, -17, 20, -16, 3, -6, 8, 11, 4, -10], instead got: [14, 9, 16, -4, -18, 8, -15, -17, 20, -16, 3, -6, 8, -18, 11, 4, -10]
 Testing for arrayDiff([-6,-17,-8],[-8,-17])
Should work for random arrays too - Expected: [-6], instead got: [-6, -17, -8]
 Testing for arrayDiff([-19,5,-17,-10,-16,15,-12,18,18,-1,5,3,4,-3,-13,-15,12,14],[-10,18,18,-16,5,3,-12,14,-19,-15,5,-17,-3,-1])
Should work for random arrays too - Expected: [15, 4, -13, 12], instead got: [-19, 5, -17, -10, -16, 15, -12, 18, 18, -1, 5, 3, 4, -3, -13, -15, 12, 14]
Completed in 1ms
 Testing for arrayDiff([-14,11,-18,1,-3,14,-20,6,-2],[11,6,-3,-2,-20,14,-14,-18,1])
Should work for random arrays too - Expected: [], instead got: [-14, 11, -18, 1, -3, 14, -20, 6, -2]
 Testing for arrayDiff([-4,-19,-1,20,-9,-15,15,-16,-9,15,9,-11,-13,-6],[-15,-11,9,-4])
Should work for random arrays too - Expected: [-19, -1, 20, -9, 15, -16, -9, 15, -13, -6], instead got: [-4, -19, -1, 20, -9, -15, 15, -16, -9, 15, 9, -11, -13, -6]
 Testing for arrayDiff([-6,-1,-17,-5,11,3,-4,-6,-3,-6,16,-13,-13],[-13,16,-13,3])
Should work for random arrays too - Expected: [-6, -1, -17, -5, 11, -4, -6, -3, -6], instead got: [-6, -1, -17, -5, 11, 3, -4, -6, -3, -6, 16, -13, -13]
Completed in 11ms
*/
/*
 STDERR
Unhandled rejection TestError: a was [1,2,2], b was [2] - Expected: [1], instead got: [1, 2]
Unhandled rejection TestError: a was [1,2,2], b was [2] - Expected: [1], instead got: [1, 2]
 */