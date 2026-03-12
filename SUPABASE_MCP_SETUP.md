# 🚀 Supabase MCP Server Setup in Kiro

## What is Supabase MCP?

The Supabase MCP (Model Context Protocol) server allows me (Kiro AI) to directly interact with your Supabase project. This means I can:

- ✅ Create database tables for you
- ✅ Run SQL queries
- ✅ Apply migrations
- ✅ Manage Edge Functions
- ✅ View logs and advisors
- ✅ Generate TypeScript types
- ✅ Search Supabase docs

**No more manual SQL!** I can set up your entire database automatically.

## ✅ What I've Done

I've created the MCP configuration file at `.kiro/settings/mcp.json` with the Supabase MCP server.

## 🔧 Setup Steps

### Step 1: Restart Kiro (Important!)

The MCP server needs Kiro to restart to load the configuration.

**How to restart:**
1. Close this Kiro window
2. Reopen Kiro
3. Open this project again

OR use the command palette:
- Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
- Type "Reload Window"
- Press Enter

### Step 2: Authenticate with Supabase

After restart, the Supabase MCP server will need authentication.

**What will happen:**
1. Kiro will detect the Supabase MCP server
2. A browser window will open automatically
3. You'll be asked to login to Supabase
4. Grant access to the MCP server
5. Choose your organization

**If browser doesn't open:**
- Check the Kiro MCP panel (sidebar)
- Look for authentication prompts
- Or manually visit: https://mcp.supabase.com/mcp

### Step 3: Verify Connection

After authentication, verify the connection:

**Option 1: Check MCP Panel**
- Open Kiro sidebar
- Look for "MCP Servers" section
- Supabase should show as "Connected"

**Option 2: Ask Me!**
Just ask me: "List my Supabase projects using MCP"

If I can respond with your projects, it's working!

## 🎯 What You Can Do Now

Once connected, you can ask me to:

### Database Setup
```
"Create the videos and bookings tables in Supabase using MCP"
"Show me all tables in my database"
"Generate TypeScript types for my database schema"
```

### Queries
```
"Query all videos from the database"
"Show me the latest 10 bookings"
"Count how many videos are featured"
```

### Migrations
```
"Create a migration to add a 'views' column to videos table"
"Apply pending migrations"
"Show migration history"
```

### Edge Functions
```
"List all Edge Functions"
"Deploy a new Edge Function for sending emails"
```

### Debugging
```
"Show me the latest API logs"
"Get performance advisors for my database"
"Check for security issues"
```

## 🔒 Security Settings

The MCP server I configured uses these safe defaults:

- ✅ **Hosted Server**: Uses Supabase's official hosted MCP server
- ✅ **OAuth Authentication**: Secure browser-based login
- ✅ **No Hardcoded Tokens**: No API keys in config files
- ✅ **Organization Scoped**: You choose which org to connect

### Optional: Restrict to Development Project

If you want to scope the MCP server to only your development project (recommended):

1. Get your project ref from Supabase dashboard
2. Update `.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp?project_ref=YOUR_PROJECT_REF",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

### Optional: Read-Only Mode

For extra safety, enable read-only mode:

```json
{
  "mcpServers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp?read_only=true",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

## 🎬 Quick Start After Setup

### 1. Create Database Tables Automatically

Instead of manually running SQL, just ask me:

```
"Using Supabase MCP, create these tables:

1. videos table:
   - id (uuid, primary key)
   - title (text)
   - youtube_id (text)
   - description (text)
   - project_type (text)
   - featured (boolean)
   - created_at (timestamp)

2. bookings table:
   - id (uuid, primary key)
   - name (text)
   - phone (text)
   - email (text, nullable)
   - service (text)
   - message (text, nullable)
   - created_at (timestamp)

Also set up Row Level Security policies."
```

I'll create everything for you!

### 2. Verify Tables

```
"Show me all tables in the database"
```

### 3. Add Sample Data

```
"Insert a sample video into the videos table"
```

### 4. Generate TypeScript Types

```
"Generate TypeScript types for my database schema"
```

## 📊 Available MCP Tools

Once connected, I have access to these Supabase tools:

### Database Tools
- `list_tables` - List all database tables
- `list_extensions` - List Postgres extensions
- `list_migrations` - List database migrations
- `apply_migration` - Apply a migration
- `execute_sql` - Execute SQL queries

### Development Tools
- `get_project_url` - Get API URL
- `get_publishable_keys` - Get anon/public keys
- `generate_typescript_types` - Generate types from schema

### Debugging Tools
- `get_logs` - Retrieve service logs
- `get_advisors` - Get security/performance advisors

### Edge Functions
- `list_edge_functions` - List all Edge Functions
- `get_edge_function` - Get specific function
- `deploy_edge_function` - Deploy a function

### Account Management
- `list_projects` - List all projects
- `get_project` - Get project details
- `create_project` - Create new project
- `list_organizations` - List organizations

### Documentation
- `search_docs` - Search Supabase docs

## 🆘 Troubleshooting

### MCP Server Not Showing

**Check:**
1. Did you restart Kiro?
2. Is `.kiro/settings/mcp.json` in the correct location?
3. Check Kiro's MCP panel in sidebar

**Fix:**
```bash
# Verify file exists
ls .kiro/settings/mcp.json

# Restart Kiro
# Use Command Palette: "Reload Window"
```

### Authentication Failed

**Check:**
1. Do you have a Supabase account?
2. Did the browser window open?
3. Did you grant access?

**Fix:**
- Try disconnecting and reconnecting in MCP panel
- Clear browser cookies for supabase.com
- Try incognito/private browsing

### "No Tools Available"

**Check:**
1. Is the MCP server connected?
2. Did authentication complete?
3. Did you choose an organization?

**Fix:**
- Restart Kiro
- Re-authenticate
- Check MCP panel status

### Can't Execute SQL

**Check:**
1. Is read-only mode enabled?
2. Do you have permissions in Supabase?
3. Is the project active?

**Fix:**
- Remove `read_only=true` from URL
- Check Supabase project status
- Verify organization permissions

## 🎉 Benefits of Using MCP

### Before MCP:
1. You: "I need database tables"
2. Me: "Here's the SQL, copy and paste it into Supabase"
3. You: Copy SQL → Open Supabase → Paste → Run
4. You: "It worked!"
5. Me: "Great! Now add Row Level Security..."
6. Repeat...

### With MCP:
1. You: "Create the database tables"
2. Me: *Creates tables automatically using MCP*
3. Me: *Sets up RLS policies*
4. Me: *Generates TypeScript types*
5. Me: "Done! Everything is set up."

**10x faster!** 🚀

## 📚 Next Steps

1. **Restart Kiro** (most important!)
2. **Authenticate** with Supabase when prompted
3. **Ask me** to create your database tables
4. **Test** by asking me to query the database
5. **Enjoy** automatic database management!

## 🔗 Resources

- [Supabase MCP Docs](https://supabase.com/docs/guides/getting-started/mcp)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Supabase MCP GitHub](https://github.com/supabase-community/supabase-mcp)

---

**After restart, just ask me to set up your database and I'll do it all automatically!** 🎯
