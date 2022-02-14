class LongestSubstringWithoutRepeatingCharacters {
    public int lengthOfLongestSubstring(String s) {
        Map<Character,Integer> map = new HashMap<Character,Integer>();
        int ans = 0,start=0,end=0;
        for(int i = 0;i<s.length();i++){
            if(map.containsKey(s.charAt(i))){
                start = Math.max(start,map.get(s.charAt(i))+1);   
            }
            map.put(s.charAt(i),i);
            end=i;
            ans = Math.max(ans,end-start+1);
        }
        return ans;
    }
}
