import random

def generate_test_cases(t, N, M):
    directions = ['0','1','R', 'L', 'U', 'D']
    test_cases = []
    for _ in range(t):
        grid = []
        for _ in range(N):
            row = ""
            for _ in range(M):
                row += random.choice(directions)
            grid.append(row)
        # Add 'S' at a random position in the grid
        row_index = random.randint(0, N-1)
        col_index = random.randint(0, M-1)
        grid[row_index] = grid[row_index][:col_index] + 'S' + grid[row_index][col_index+1:]
        test_cases.append(grid)
    return test_cases

# Generate 5 test cases with N=5 and M=5
test_cases = generate_test_cases(5,99, 77)

# Print the generated test cases
for i, test_case in enumerate(test_cases):
    print(f"Test case {i+1}:")
    for row in test_case:
        print(row)
    print()